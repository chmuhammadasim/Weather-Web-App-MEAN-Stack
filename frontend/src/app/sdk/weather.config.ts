export class WeatherConfig {
    private static path = `http://localhost:3000`;
  
    public static getPath(): string {
      return WeatherConfig.path;
    }
  }
  