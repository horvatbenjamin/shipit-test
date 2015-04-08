odule.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
      repositoryUrl: 'https://github.com/horvatbenjamin/shipit-test.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      shallowClone: true
    },
    staging: {
      servers: 'deploy@mad.itk.ppke.hu'
    }
  });
};