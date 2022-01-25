# Vite
## Scaffolding Vite 프로젝트 생성
```bash
# npm 6.x
npm init vite@latest [project-name] --template [template-name]

# npm 7+, extra double-dash is needed:
npm init vite@latest [project-name] -- --template [template-name]

# yarn
yarn create vite [project-name] --template [template-name]

# pnpm
pnpm create vite [project-name] -- --template [template-name]
```
- [project-name] : scaffolding vite 프로젝트의 이름, 현재 위치의 디렉토리를 scaffolding vite 프로젝트로 초기화하고 싶을 경우 `.`
- [template-name] : vite에서 지원하는 템플릿 (Ex. `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`, [for more details...](https://github.com/vitejs/vite/tree/main/packages/create-vite))