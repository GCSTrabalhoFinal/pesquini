# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|

  config.vm.define "web" do |web|
    web.vm.box = "ubuntu/xenial64"

    web.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true # rails application
    web.vm.network :forwarded_port, guest: 5432,  host: 5532, auto_correct: true  # postgresql
    web.vm.network "private_network", ip: "192.168.1.10"

    web.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.memory = "1024"
    end

    web.vm.provision :shell, path: "install-rvm.sh", args: "stable", privileged: false
    web.vm.provision :shell, path: "install-ruby.sh", args: "2.3.1", privileged: false
    web.vm.provision :shell, path: "install-ruby.sh", args: "2.3.1 rails haml", privileged: false
    web.vm.provision :shell, path: "install-postgresql.sh", args: "9.6", privileged: false
    web.vm.provision "shell", inline: "apt-get install -y python"

    web.vm.provision "ansible" do |ansible|
      ansible.playbook = "desenvolvimento.yml"
    end
  end
  #   config.vm.provision "shell", inline: <<-SHELL, privileged: false
  #   sudo apt-get update
  #   sudo apt-get install -y nodejs nodejs-legacy postgresql-common postgresql-9.6
  #   sudo apt-get install -y git curl automake build-essential bison
  #   sudo apt-get install -y libpq-dev libssl-dev libtool libcurl4-openssl-dev
  #   sudo apt-get install -y libyaml-dev libreadline-dev libxml2-dev libxslt1-dev
  #   sudo apt-get install -y libffi-dev libffi-dev libgdbm-dev libncurses5-dev
  #   sudo apt-get install -y libsqlite3-dev sqlite3 zlib1g-dev
  #   sudo apt-get install -y python-software-properties
  #   rvm default ruby-2.3.1
  #   gem install bundler
  #   gem install nokogiri -v '1.6.8'
  #   gem install rails
  #   sudo apt-get install curl
  #   curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  #   sudo apt-get install -y nodejs
  #   sudo apt-get install -y npm -g
  #   sudo apt-get autoremove
  #   sudo apt-get autoclean
  #   sudo apt-get update
  #   cd /vagrant/
  #   sudo npm update --save-dev
  #   sudo npm install gulp -g --save-dev
  #   sudo npm link gulp
  #   sudo npm install gulp-sass --save-dev
  #   sudo npm link gulp-sass
  #   sudo npm install --save uglify-js
  #   sudo npm link uglify-js
  #   sudo npm install browser-sync
  #   sudo npm link browser-sync
  #   sudo npm install del
  #   sudo npm link del
  #   # sudo npm rebuild node-sass
  #   bundle install
  #   bundle update
  # SHELL
end
