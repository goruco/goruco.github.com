desc "Launch preview environment."
task :preview do
  lines = []
  lines <<
    "for i in ./_layouts/*.haml; do [ -e $i ] && haml $i ${i%.haml}.html; done"
  lines << "compass watch"
  lines << "jekyll serve --watch"
  system(lines.join(' & '))
end

desc 'nuke, build and compass'
task :generate do
  sh 'rm -rf _site'
  jekyll
end

def jekyll
  # time to give me generation times
  # I'm just curious about how long it takes
  sh 'time jekyll'
  # compass already configured via config.rb in root
  sh 'compass compile'
end
