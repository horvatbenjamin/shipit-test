module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-npm')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
      repositoryUrl: 'https://github.com/horvatbenjamin/shipit-test.git',
//      ignores: ['.git', 'node_modules'],
      ignores: ['.git'],
      rsync: ['--del'],
      keepReleases: 5,
      shallowClone: true,
    npm: {
      remote: false
//      installArgs: ['gulp']
    }

    },
    staging: {
      servers: 'deploy@mad.itk.ppke.hu'
    }
  });
    shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });
};