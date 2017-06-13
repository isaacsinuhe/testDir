REPORTER = list
MOCHA_OPTS = --ui bdd -c

db:
	echo Seeding blog-test *****************************************************
	./db/seed.sh
test:
	clear

	echo Starting test *********************************************************
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	tests/*.js
	echo Ending test
start:
	TWITTER_CONSUMER_KEY=25UmaytpMr9sKCaeOJAK0rfGX \
	TWITTER_CONSUMER_SECRET=l2KLtCy8pe8CptYiiXKlnpylDZYxDSRHPbwiXNOZYEDBrl8t9U \
	node  build/app

.PHONY: test db start