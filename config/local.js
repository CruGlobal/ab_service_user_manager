/*
 * user_manager
 */
import AB from "@digiserve/ab-utils";
const env = AB.defaults.env;

export default {
   user_manager: {
      /*************************************************************************/
      /* enable: {bool} is this service active?                                */
      /*************************************************************************/
      enable: env("USER_MANAGER_ENABLE", true),

      /*************************************************************************/
      /* maxFailedLogins: {integer} how many failed logins before rejecting    */
      /*                  any more login attempts                              */
      /*************************************************************************/
      maxFailedLogins: env("USER_MANAGER_MAX_FAILED_LOGINS", 5),
   },

   /**
    * datastores:
    * Sails style DB connection settings
    */
   datastores: AB.defaults.datastores(),
};
