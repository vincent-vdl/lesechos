import { useEffect, useState } from 'react';

import { USER_WITH_ONE_SUBSCRIPTION } from '@lesechos/data';
import { User } from '@lesechos/types';

export type UseUser = {
  user: User | null;
  loading: boolean;
};

export function useUser(): UseUser {
  const [user, setUser] = useState<UseUser['user']>(null);
  const [loading, setLoading] = useState<UseUser['loading']>(true);

  useEffect(() => {
    const loadUser = async (): Promise<void> => {
      setTimeout(() => {
        setUser(USER_WITH_ONE_SUBSCRIPTION);
        setLoading(false);
      }, 1000);
    };
    if (!user) {
      setLoading(true);
      loadUser();
    }
  }, [user]);

  return { user, loading };
}
