#pragma checksum "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ec70553422dec708a3a19a017fad79e6211944f1"
// <auto-generated/>
#pragma warning disable 1591
namespace latestBlazor.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using latestBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using latestBlazor.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using Smart.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\_Imports.razor"
using MudBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
using Smart.Blazor.Demos.Data;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/")]
    public partial class Tree_GridPage : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "style", "height:1000px");
            __builder.AddElementReferenceCapture(2, (__value) => {
#nullable restore
#line 6 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
           divRef = __value;

#line default
#line hidden
#nullable disable
            }
            );
#nullable restore
#line 7 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
     if (dataRecords != null) {
    

#line default
#line hidden
#nullable disable
            __builder.OpenComponent<Smart.Blazor.Grid>(3);
            __builder.AddAttribute(4, "DataSource", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Object>(
#nullable restore
#line 10 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                        dataRecords

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(5, "Selection", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.GridSelection>(
#nullable restore
#line 11 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                        selection

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(6, "OnReady", new System.Action<Smart.Blazor.Grid>(
#nullable restore
#line 12 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                       onReadyCallback

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(7, "OnChange", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<Smart.Blazor.Event>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Smart.Blazor.Event>(this, 
#nullable restore
#line 13 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                       onChangeCallback

#line default
#line hidden
#nullable disable
            )));
            __builder.AddAttribute(8, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<Smart.Blazor.Columns>(9);
                __builder2.AddAttribute(10, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.OpenComponent<Smart.Blazor.Column>(11);
                    __builder3.AddAttribute(12, "DataField", "FirstName");
                    __builder3.AddAttribute(13, "Label", "First Name");
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(14, "\r\n                ");
                    __builder3.OpenComponent<Smart.Blazor.Column>(15);
                    __builder3.AddAttribute(16, "DataField", "LastName");
                    __builder3.AddAttribute(17, "Label", "Last Name");
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(18, "\r\n                ");
                    __builder3.OpenComponent<Smart.Blazor.Column>(19);
                    __builder3.AddAttribute(20, "DataField", "ProductName");
                    __builder3.AddAttribute(21, "Label", "Product");
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(22, "\r\n                ");
                    __builder3.OpenComponent<Smart.Blazor.Column>(23);
                    __builder3.AddAttribute(24, "DataField", "Quantity");
                    __builder3.AddAttribute(25, "Label", "Quantity");
                    __builder3.AddAttribute(26, "DataType", "number");
                    __builder3.AddAttribute(27, "Align", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.HorizontalAlignment>(
#nullable restore
#line 21 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                               Smart.Blazor.HorizontalAlignment.Right

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(28, "CellsAlign", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.HorizontalAlignment>(
#nullable restore
#line 21 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                                                                                   Smart.Blazor.HorizontalAlignment.Right

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(29, "\r\n                ");
                    __builder3.OpenComponent<Smart.Blazor.Column>(30);
                    __builder3.AddAttribute(31, "DataField", "Price");
                    __builder3.AddAttribute(32, "Label", "Unit Price");
                    __builder3.AddAttribute(33, "DataType", "number");
                    __builder3.AddAttribute(34, "Align", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.HorizontalAlignment>(
#nullable restore
#line 24 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                               Smart.Blazor.HorizontalAlignment.Right

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(35, "CellsAlign", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.HorizontalAlignment>(
#nullable restore
#line 24 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                                                                                   Smart.Blazor.HorizontalAlignment.Right

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(36, "CellsFormat", "c2");
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(37, "\r\n                ");
                    __builder3.OpenComponent<Smart.Blazor.Column>(38);
                    __builder3.AddAttribute(39, "DataField", "Total");
                    __builder3.AddAttribute(40, "Label", "Total");
                    __builder3.AddAttribute(41, "DataType", "number");
                    __builder3.AddAttribute(42, "Align", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.HorizontalAlignment>(
#nullable restore
#line 27 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                               Smart.Blazor.HorizontalAlignment.Right

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(43, "CellsAlign", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.HorizontalAlignment>(
#nullable restore
#line 27 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                                                                                   Smart.Blazor.HorizontalAlignment.Right

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(44, "CellsFormat", "c2");
                    __builder3.CloseComponent();
                }
                ));
                __builder2.CloseComponent();
            }
            ));
            __builder.AddComponentReferenceCapture(45, (__value) => {
#nullable restore
#line 9 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                     grid = (Smart.Blazor.Grid)__value;

#line default
#line hidden
#nullable disable
            }
            );
            __builder.CloseComponent();
            __builder.AddMarkupContent(46, "\r\n        <br>\r\n        ");
            __builder.OpenComponent<Smart.Blazor.Tree>(47);
            __builder.AddAttribute(48, "DataSource", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Collections.Generic.IEnumerable<System.Object>>(
#nullable restore
#line 33 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                         treeDataSource

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(49, "SelectedIndexes", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String[]>(
#nullable restore
#line 34 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                              selectedTreeItems

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(50, "ScrollMode", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.TreeScrollMode>(
#nullable restore
#line 35 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                        TreeScrollMode.Scrollbar

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(51, "SelectionMode", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.TreeSelectionMode>(
#nullable restore
#line 36 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                           TreeSelectionMode.OneOrMany

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(52, "+", true);
            __builder.AddAttribute(53, "OnChange", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<Smart.Blazor.Event>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Smart.Blazor.Event>(this, 
#nullable restore
#line 37 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
                       treeOnChange

#line default
#line hidden
#nullable disable
            )));
            __builder.AddAttribute(54, "ShowLines", true);
            __builder.CloseComponent();
#nullable restore
#line 40 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
    }

#line default
#line hidden
#nullable disable
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 42 "C:\Users\macair1\Desktop\JqWidgets\smart-webcomponents\SupportSolutionCases\BlazorWASM\Tree&GridOnChange\Pages\Tree&GridPage.razor"
       

    string[] selectedTreeItems  = new string []
    {
        "0.1", "0.2" , "1.3" 
    };


 private List<Dictionary<string, object>> treeDataSource = new List<Dictionary<string, object>>()
    {
        new Dictionary<string, object>()
        {
            { "label", "Cats" },
            { "expanded", true },
            {
                "items",
                new List<Dictionary<string, object>>()
                {
                    new Dictionary<string, object>() { { "label", "Tiger" },  },
                    new Dictionary<string, object>() { { "label", "Lion" } },
                    new Dictionary<string, object>() { { "label", "Jaguar" } },
                    new Dictionary<string, object>() { { "label", "Leopard" } },
                    new Dictionary<string, object>() { { "label", "Serval" } },
                    new Dictionary<string, object>() { { "label", "Domestic cat" } }
                }
            }
        },
        new Dictionary<string, object>()
        {
            { "label", "Dogs" },
            { "expanded", true },
            {
                "items",
                new List<Dictionary<string, object>>()
                {
                    new Dictionary<string, object>() { { "label", "Gray wolf" } },
                    new Dictionary<string, object>() { { "label", "Ethiopian wolf" }, },
                    new Dictionary<string, object>() { { "label", "Arctic fox" },  },
                    new Dictionary<string, object>() { { "label", "Dingo" } },
                    new Dictionary<string, object>() { { "label", "Domestic dog" },  }
                }
            }
        }
    };

    ElementReference divRef;

    public Grid grid;

    GridSelection selection = new GridSelection()
    {
        Enabled = true,
        Mode = GridSelectionMode.One,
        CheckBoxes = new GridSelectionCheckBoxes()
        {  
            Enabled = false
        }
    };
    private List<DataRecord> dataRecords;

    private async void onChangeCallback (Event eventObj)
    {
        GridChangeEventDetail detail = eventObj["Detail"];
  
        Console.WriteLine(detail.Started);
  
      
        IEnumerable<object> selectedRow = await grid.GetSelectedRows();
        
        foreach (var v in selectedRow)
        {
             Console.WriteLine(v);
        }
       
    }
    private void treeOnChange (Event eventObj) 
    {
        TreeChangeEventDetail detail = eventObj["Detail"];
    }
    
    private void onReadyCallback (Grid grid) {

        int selectionIndex = 1;

        string dataField = "firstName";

        grid.Select(selectionIndex, dataField);
     }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        dataRecords = dataService.GenerateData(3000);

    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private RandomDataService dataService { get; set; }
    }
}
#pragma warning restore 1591
