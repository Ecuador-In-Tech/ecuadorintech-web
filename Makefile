all: dev

check: FRC
	dprint fmt
	biome check --write

build: check
	pnpm run build

preview: build
	pnpm run preview

dev: check
	pnpm run dev

FRC: