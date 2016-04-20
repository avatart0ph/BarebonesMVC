using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Routing;

namespace BarebonesMVC
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

    }
}