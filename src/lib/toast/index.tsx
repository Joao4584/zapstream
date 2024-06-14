import { toast } from "sonner";
import { FaCheck, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

class Toasts {
  private message: string = '';
  private description?: string;
  private type: 'success' | 'warning' | 'error' | 'info' = 'info';

  public setMessage(message: string): void {
    this.message = message;
  }

  public setDescription(description: string): void {
    this.description = `<span> ${description}</span>`;
  }

  public setType(type: 'success' | 'warning' | 'error' | 'info'): void {
    this.type = type;
  }

  private getIcon() {
    switch (this.type) {
      case 'success':
        return <FaCheck className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <FaExclamationCircle className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <FaTimesCircle className="h-5 w-5 text-red-500" />;
      case 'info':
        return <FaInfoCircle className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  }

  public show(): void {
    const icon = this.getIcon();
    toast(this.message, {
      description: this.description,
      icon: icon,
    });
  }
}

export default Toasts;
