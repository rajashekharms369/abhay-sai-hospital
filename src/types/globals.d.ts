// TypeScript 6 checks side-effect imports (noUncheckedSideEffectImports),
// so plain-CSS imports like `import "./globals.css"` need a declaration.
declare module "*.css";
