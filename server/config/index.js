// config for server

// Authentication JWT
export const SECRET_KEY_AUTH = 'SECRET_KEY_AUTH';
export const SECRET_KEY_AUTH_VALUE = 'mxkfHC28Ghnxm554DD';
export const jwtConfig = {
  expiresIn: "10h",
};


// Host server
export const devHostServer = {
  host: 'localhost',
  port: 3000,
};

const prodHostServer = {
  host: '',
}

export const baseDevUrl = `http://${devHostServer.host}:${devHostServer.port}`;
