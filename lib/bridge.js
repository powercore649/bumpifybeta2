const BRIDGE_URL = process.env.BRIDGE_URL;

export const bridge = {
  // Route publique du bridge, pas de secret nécessaire.
  publicServers: async () => {
    const res = await fetch(`${BRIDGE_URL}/public/servers`, { cache: 'no-store' });
    return res.json();
  },
};
