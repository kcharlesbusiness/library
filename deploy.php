<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'library');

// Project repository
set('repository', 'https://github.com/kcharlesbusiness/library.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', ['.env']);
set('shared_dirs', ['node_modules']);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts
host('library')
  ->hostname('46.101.52.142')
  ->user('root')
  ->set('branch', 'develop')
  ->identityFile('~/.ssh/id_rsa')
  ->set('deploy_path', '/var/www/html/library');

task('build', function () {
  run('cd ' . __DIR__ . '&& npm install');
})->local();

//task('upload', function () {
//  upload(__DIR__ . "/node_modules", '{{release_path}}/');
//});

task('upload', function(){
  run('scp -r node_modules/ root@karlcharles.co.uk:/var/www/html/library/current');
});

task('deploy:owner', function () {
  run('chown -R www-data:www-data /var/www');
});

task('server:start', function(){
  run('cd {{release_path}}/ && cat index.js');
});
    

// Tasks

desc('Deploy your project');
task('deploy', [
  'deploy:info',
  'deploy:prepare',
  'deploy:lock',
  'deploy:release',
  'deploy:update_code',
  'deploy:shared',
  'deploy:writable',
  'build',
  'deploy:clear_paths',
  'deploy:symlink',
  'deploy:owner',
  'deploy:unlock',
  'cleanup',
  'upload',
  'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
