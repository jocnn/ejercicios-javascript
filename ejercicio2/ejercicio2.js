let miVariable = 'variable de forma global';

function unaFuncion(mi_Variable) {
  miVariable = 'variable de forma local';
  console.log(miVariable);
  return mi_Variable;
}

unaFuncion(miVariable);
