/// <reference path="../../../types/index.d.ts" />

define('InstagramView', [
	'backbone',
	'tpl!views/templates/instagram_view.tpl',
	],
	function(
		Backbone, InstagramViewTemplate,
	) {

		const InstagramView = Backbone.View.extend({

			initialize(data: any): void {
				this.model = data.model;
				this.el = data.el;
				this.template = InstagramViewTemplate;

				const width = data.width || 300;
				const link: string = this.model.getLink();

				this.html = this.template({
					link,
					id_str: this.model.id_str,
					width,
					id: data.id,
				});
			},

			render(): void {
				$(this.el).append(this.html);
			},

		});

		return InstagramView;
});
