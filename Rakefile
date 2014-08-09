task :default => :run

desc 'Build site with Jekyll'
task :build do
  sh 'bundle exec jekyll build'
end

desc 'Build site, start server, watch for updates'
task :run do
  sh 'bundle exec jekyll server --watch'
end
