/// <reference path="../../../types/index.d.ts" />

define('HomeView', [
	'backbone',
	'tpl!views/templates/home_view.tpl',
	'SingletonView',
	'MapView',
	'PanelViewTwitter',
	'PanelViewInstagram',
	'GeolocationView',
	'EventMediator',
	],
	function(
		Backbone, HomeViewTemplate, SingletonView, MapView, PanelViewTwitter, PanelViewInstagram,
		GeolocationView, EventMediator,
	) {

		const HomeView = Backbone.View.extend({

			initialize(options: any) {
				this.html = HomeViewTemplate();
				this.$el.html(this.html);

				// BOUNDS OR GRAND RAPIDS
				const bounds: App.Bounds = options.bounds !== undefined ?
					options.bounds :  {center: {lat: 42.9634, lng: -85.6681}, dist: 0.015};

				const panelLeftView = new PanelViewTwitter({el: '#panel-twitter', bounds});
				const panelRightView = new PanelViewInstagram({el: '#panel-instagram', bounds});

				const geolocationView = new GeolocationView({el: '#geolocation-view'});
				const mapView = new MapView({el: '#map-view', bounds});

				let oldWindowWidth;
				const setView = function(windowWidth: number): void {
					// Window is Small
					if (windowWidth < 1250) {
						EventMediator.emit('full-screen-request', 'full-screen-request');
					}
					// Window is large
					if (windowWidth > 1250) {
						geolocationView.ForceMinimizedView();
					}
				};

				setView($( window ).width());
				mapView.render();

				window.onresize = (event) => {
					setView($( window ).width());
					mapView.resize();
				};

			},

			render() {
				return this;
			},

		});

		return new SingletonView(HomeView);
});
