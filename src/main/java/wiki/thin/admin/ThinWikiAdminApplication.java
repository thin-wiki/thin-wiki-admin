package wiki.thin.admin;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import wiki.thin.ThinApplication;
import wiki.thin.core.startup.StartupApplication;

@Configuration
public class ThinWikiAdminApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        StartupApplication.run(args, ThinApplication.class);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedOriginPatterns("*")
                .allowedMethods("*");
    }
}
