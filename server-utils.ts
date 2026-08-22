import net from 'node:net';

export async function resolvePort(startPort: number, host = '0.0.0.0', maxAttempts = 10): Promise<number> {
  for (let port = startPort; port < startPort + maxAttempts; port += 1) {
    const isAvailable = await new Promise<boolean>((resolve, reject) => {
      const server = net.createServer();

      server.once('error', (err: NodeJS.ErrnoException) => {
        if (err.code === 'EADDRINUSE') {
          resolve(false);
        } else {
          reject(err);
        }
      });

      server.once('listening', () => {
        server.close(() => resolve(true));
      });

      server.listen(port, host);
    });

    if (isAvailable) {
      return port;
    }
  }

  throw new Error(`Unable to find an available port from ${startPort}`);
}
