import {
  createUser,
  getUserProfile,
  loginUser,
  updateUserProfile,
} from "../../services/apiServices";
import {
  fetchUserProfileFailure,
  fetchUserProfileSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
  updateFirstName,
  updateLastName,
} from "../slices/authSlice";

const authMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === "user/login") {
      dispatch(loginRequest());
      try {
        // Envoyer la requête POST pour se connecter
        const response = await loginUser(action.payload);

        // Vérifier si la réponse contient une erreur
        if (response.error) {
          throw new Error(response.error.message || "Login failed");
        }

        const token = response.body.token;

        // Envoyer une requête pour obtenir le profil de l'utilisateur
        const userProfile = await getUserProfile(token);

        // Vérifier si la réponse de profil contient une erreur
        if (userProfile.error) {
          throw new Error(
            userProfile.error.message || "Failed to fetch user profile"
          );
        }

        // Si aucune erreur n'est trouvée, dispatcher les actions de succès
        dispatch(loginSuccess({ token }));
        dispatch(fetchUserProfileSuccess({ user: userProfile.body }));

        // Sauvegarder les informations dans le stockage local ou de session
        if (action.payload.rememberMe) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userProfile.body));
        } else {
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", JSON.stringify(userProfile.body));
        }
      } catch (error) {
        const message = error.message;
        const errorDetails = {
          general: message,
          email: message.includes("User not found") ? message : null,
          password: message.includes("Password is invalid") ? message : null,
        };

        dispatch(loginFailure({ error: errorDetails }));
        dispatch(fetchUserProfileFailure({ error: errorDetails }));
      }
    }

    if (action.type === "user/signup") {
      dispatch(signupRequest());

      try {
        // Envoyer la requête POST pour l'inscription
        const response = await createUser(action.payload);

        // Vérifier si la réponse contient une erreur
        if (response.error) {
          throw new Error(response.error.message || "Signup failed");
        }

        // Si aucune erreur n'est trouvée, dispatcher les actions de succès
        dispatch(signupSuccess({ user: response.body }));
      } catch (error) {
        // En cas d'erreur, dispatcher l'action d'échec
        dispatch(signupFailure({ message: error.message }));
      }
    }

    if (action.type === "user/updateProfile") {
      try {
        // Envoyer la requête PUT pour mettre à jour le profil
        const { token, userData } = action.payload;
        const updatedUser = await updateUserProfile(token, userData);

        // Si la mise à jour réussit, dispatcher les actions de succès
        dispatch(updateFirstName(updatedUser.firstName));
        dispatch(updateLastName(updatedUser.lastName));
      } catch (error) {
        // En cas d'erreur, loguer l'erreur
        console.error("Profile update failed:", error.message);
      }
    }

    // Passer l'action suivante dans le middleware
    return next(action);
  };

export default authMiddleware;
