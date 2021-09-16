
      window.$docsify = {
        search: 'auto',
        // Name that will be displayed in sidebar
        name: '@rx-angular',
        // Takes only # & ## as sidebar links
        subMaxLevel: 2,
        // Show sidebar
        loadSidebar: true,
        // Coverpage url
        coverpage: './web/partials/_coverpage.md',
        // Prevents multiple downloads of sidebar
        alias: {
          '/.*/_sidebar.md': './web/partials/_sidebar.md',
          '/_sidebar.md': './web/partials/_sidebar.md',
        },
        routerMode: 'history',
        // Autoscroll content to the top when changing page
        auto2top: true,
        relativePath: true,
      };
    