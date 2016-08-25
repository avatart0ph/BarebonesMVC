using Castle.Windsor;
using BarebonesMVC.Infrastructure.IoC;
using Castle.Windsor.Installer;
using Castle.MicroKernel.Resolvers.SpecializedResolvers;
using System;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;

namespace BarebonesMVC
{
    public class Global : System.Web.HttpApplication
    {
        private static IWindsorContainer _container;

        protected void Application_Start(object sender, EventArgs e)
        {
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            // Initialize Castle & install application components
            var container = new WindsorContainer();
            container.Install(new ApplicationCastleInstaller());

            // Create the Controller Factory
            var castleControllerFactory = new CastleControllerFactory(container);

            // Add the Controller Factory into the MVC web request pipeline
            ControllerBuilder.Current.SetControllerFactory(castleControllerFactory);


            ConfigureWindsor(GlobalConfiguration.Configuration);
        }

        public static void ConfigureWindsor(HttpConfiguration configuration)
        {
            _container = new WindsorContainer();
            _container.Install(FromAssembly.This());
            _container.Kernel.Resolver.AddSubResolver(new CollectionResolver(_container.Kernel, true));
            var dependencyResolver = new DependencyResolver(_container);
            configuration.DependencyResolver = dependencyResolver;
        }

    }
}