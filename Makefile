JS_FILES := $(shell find . -name "*.js" -not -path "./node_modules/*" -not -name "bundle.js")
JSX_FILES := $(shell find . -name "*.jsx" -not -path "./node_modules/*")
TESTS := $(shell find . -not -path "*node_modules*" -name "*_test*")
LINT := ./node_modules/.bin/eslint
MOCHA := node_modules/mocha/bin/mocha
MOCHA_OPTIONS := --compilers jsx:babel-register --recursive --require ignore-styles --require jsdom-global/register

.PHONY: start-dev copy_static_assets test lint $(TESTS)

copy_static_assets:
	rm -rf ./__build
	mkdir ./__build
	cp -r ./public/* ./__build

start-dev: copy_static_assets
	@npm run-script dev-server

lint:
	@echo "Linting files..."
	@$(LINT) $(JS_FILES) $(JSX_FILES)

test: lint
	@echo "Running unit tests..."
	@NODE_ENV=test $(MOCHA) $(MOCHA_OPTIONS) $(TESTS)

$(TESTS):
	@echo "Running tests for $@"
	@$(LINT) $@
	@NODE_ENV=test $(MOCHA) $(MOCHA_OPTIONS) $@
