package wiki.thin.admin;

import wiki.thin.ThinApplication;
import wiki.thin.core.startup.StartupApplication;

public class ThinWikiAdminApplication {

    public static void main(String[] args) {
        StartupApplication.run(args, app -> app.setAdditionalProfiles("admin-dev"), ThinApplication.class);
    }

}
