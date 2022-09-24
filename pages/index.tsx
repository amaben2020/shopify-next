import play, { play2 } from '@/playground';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    play();
    play2();
  }, []);

  return <div>hey</div>;
}
