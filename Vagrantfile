ENV["LC_ALL"] = "en_US.UTF-8"

Vagrant.configure("2") do |config|
    config.vm.define "web" do |web|
        web.vm.box = "ubuntu/xenial64"

        web.vm.network "forwarded_port", guest: 8000, host: 8000
        web.vm.network "private_network", ip: "192.168.1.10"

        web.vm.provider "virtualbox" do |vb|
          vb.gui = false
          vb.memory = "512"
      end
    end
end
