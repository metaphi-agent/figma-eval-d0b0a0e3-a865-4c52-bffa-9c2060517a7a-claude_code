import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="max-w-[1170px] mx-auto px-4 text-center">
        <h1 className="text-[110px] font-medium mb-10">404 Not Found</h1>
        <p className="text-base mb-20">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/">
          <Button variant="primary">Back to home page</Button>
        </Link>
      </div>
    </div>
  );
}
