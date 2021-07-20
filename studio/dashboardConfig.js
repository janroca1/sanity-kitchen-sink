export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f6ebaccd7be21a80c0579a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ngcm2ebw',
                  apiId: '9ca6ae52-8809-485d-b09c-80d9805d3d4d'
                },
                {
                  buildHookId: '60f6ebac93d9d118b3c380bf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nsh38ynf',
                  apiId: 'e3c9ce42-bd6c-4b5e-a676-517077153822'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/janroca1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nsh38ynf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
