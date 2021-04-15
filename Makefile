
.PHONY: lint
lint:
	./scripts/lint.sh

.PHONY: generate
generate:
	./scripts/generate.sh

.PHONY: clean
clean:
	rm -rf gen

.PHONY: diff
diff:
	git diff --exit-code
	./scripts/diff.sh
