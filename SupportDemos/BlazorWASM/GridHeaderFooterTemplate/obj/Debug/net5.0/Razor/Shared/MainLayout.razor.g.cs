#pragma checksum "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Shared\MainLayout.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9389b6eeed29ed3dc8f5d427da5843bcdeff5ff4"
// <auto-generated/>
#pragma warning disable 1591
namespace latestBlazor.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using latestBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using latestBlazor.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Smart.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using MudBlazor;

#line default
#line hidden
#nullable disable
    public partial class MainLayout : LayoutComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "class", "page");
            __builder.AddAttribute(2, "b-bg7w0yy1oc");
            __builder.OpenElement(3, "div");
            __builder.AddAttribute(4, "class", "sidebar");
            __builder.AddAttribute(5, "b-bg7w0yy1oc");
            __builder.OpenComponent<latestBlazor.Shared.NavMenu>(6);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(7, "\r\n\r\n    ");
            __builder.OpenElement(8, "div");
            __builder.AddAttribute(9, "class", "main");
            __builder.AddAttribute(10, "b-bg7w0yy1oc");
            __builder.AddMarkupContent(11, "<div class=\"top-row px-4\" b-bg7w0yy1oc><a href=\"http://blazor.net\" target=\"_blank\" class=\"ml-md-auto\" b-bg7w0yy1oc>About</a></div>\r\n\r\n        ");
            __builder.OpenElement(12, "div");
            __builder.AddAttribute(13, "class", "content px-4");
            __builder.AddAttribute(14, "b-bg7w0yy1oc");
            __builder.AddContent(15, 
#nullable restore
#line 14 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Shared\MainLayout.razor"
             Body

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(16, "\r\n\r\n    ");
            __builder.OpenComponent<MudBlazor.MudThemeProvider>(17);
            __builder.CloseComponent();
            __builder.AddMarkupContent(18, "\r\n");
            __builder.OpenComponent<MudBlazor.MudDialogProvider>(19);
            __builder.CloseComponent();
            __builder.AddMarkupContent(20, "\r\n");
            __builder.OpenComponent<MudBlazor.MudSnackbarProvider>(21);
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
