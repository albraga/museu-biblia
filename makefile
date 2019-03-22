REPOSITORY = museu-biblia

help:
	@echo -B --always-make
	@echo first

first: build docs
	rm -rfv .git
	git init
	git add --all
	git commit -m "make this the first and the only commit"
	git remote add origin https://github.com/albraga/${REPOSITORY}
	git push -u --force origin master 

repository:
	curl -u 'albraga' https://api.github.com/user/repos -d '{"name":"${REPOSITORY}"}'


forcepull:
	git fetch --all
	git reset --hard origin/master

.PHONY: docs
docs:
	rm -rfv docs
	mv -v dist docs

build:
	npm run build

serve:
	npm run serve
	
inspect:
	vue inspect 1> inspect.js
