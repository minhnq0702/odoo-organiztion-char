openerp.organization_chart = function (instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    // local.HomePage = instance.Widget.extend({
    //     start: function() {
    //         console.log("organization chart home page loaded");
    //     },
    // });
    local.HomePage = instance.Widget.extend({
        template: "HomePageOrganizationChart",
        init: function (parent) {
            this._super(parent);
            this.name = "Mordecai";
        },

        start: function () {
            var tmp = this._super(this, arguments);
            var options = new primitives.orgdiagram.Config();
            var items = [
                new primitives.orgdiagram.ItemConfig({
                    id: 0,
                    parent: null,
                    title: "Scott Aasrud",
                    description: "VP, Public Sector",
                    image: "demo/images/photos/a.png"
                }),
                new primitives.orgdiagram.ItemConfig({
                    id: 1,
                    parent: 0,
                    title: "Ted Lucas",
                    description: "VP, Human Resources",
                    image: "demo/images/photos/b.png"
                }),
                new primitives.orgdiagram.ItemConfig({
                    id: 2,
                    parent: 0,
                    title: "Fritz Stüger",
                    description: "Business Solutions, US",
                    image: "demo/images/photos/c.png"
                })
            ];
            options.items = items;
            options.cursorItem = 0;
            options.hasSelectorCheckbox = primitives.common.Enabled.True;
            console.log(this.getParent().$el);

            $(this.$el.find("#basicdiagram").prevObject[4]).orgDiagram(options);
            // return $.when.apply(tmp);
        },
    });

    // local.HomePage = instance.Widget.extend({
    //     start: function () {
    //         this.$el.append(QWeb.render("HomePageOrganizationChart"));
    //         // test = this.$el.find('#chart-container')
    //         // var options = new primitives.orgdiagram.Config();
    //         // var items = [
    //         //     new primitives.orgdiagram.ItemConfig({
    //         //         id: 0,
    //         //         parent: null,
    //         //         title: "Scott Aasrud",
    //         //         description: "VP, Public Sector",
    //         //         image: "demo/images/photos/a.png"
    //         //     }),
    //         //     new primitives.orgdiagram.ItemConfig({
    //         //         id: 1,
    //         //         parent: 0,
    //         //         title: "Ted Lucas",
    //         //         description: "VP, Human Resources",
    //         //         image: "demo/images/photos/b.png"
    //         //     }),
    //         //     new primitives.orgdiagram.ItemConfig({
    //         //         id: 2,
    //         //         parent: 0,
    //         //         title: "Fritz Stüger",
    //         //         description: "Business Solutions, US",
    //         //         image: "demo/images/photos/c.png"
    //         //     })
    //         // ];
    //         //
    //         // options.items = items;
    //         // options.cursorItem = 0;
    //         // options.hasSelectorCheckbox = primitives.common.Enabled.True;
    //         // jQuery("#basicdiagram").orgDiagram(options.valueOf(options));
    //         // // jQuery("#basicdiagram").orgDiagram([{'a': 123}]);
    //         // this.$el.append("<h1>TEST</h1>")
    //         // console.log('items'+ items)
    //
    //
    //     },
    //
    // });

    instance.web.client_actions.add('organization_chart.homepage', 'instance.organization_chart.HomePage');


}
