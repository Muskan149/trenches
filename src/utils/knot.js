import KnotapiJS from "knotapi-js";

export const initializeKnotAPI = ({
  sessionId = "e1fe3035-d3a2-4bf4-963b-5a2f1ca3abfd",
  clientId = "a968a75c-a6e3-4128-8250-2d50eb7fe39b",
  environment = "development",
  product = "transaction_link",
  merchantIds = [84, 78, 44, 40, 19, 13, 12, 10],
  entryPoint = "onboarding",
  onSuccess,
  onError,
  onEvent,
  onExit
}) => {
  const knotapi = new KnotapiJS();
  
  knotapi.open({
    sessionId,
    clientId,
    environment,
    product,
    merchantIds,
    entryPoint,
    onSuccess,
    onError,
    onEvent,
    onExit
  });

  return knotapi;
};

// Export a default instance with default configuration
export default initializeKnotAPI;