const htmlRendering = (element, data, renderFunctionStructure) => {
  const html = renderFunctionStructure(data);
  element.innerHTML = html;
};

export default htmlRendering;


