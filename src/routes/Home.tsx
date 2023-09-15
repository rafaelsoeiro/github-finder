import { useState } from "react";
import { Search } from "../components/Search";
import { UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status === 404) {
      setError(true);
      setUser(null);
      return;
    }

    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setError(false);
    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error errorMessage="Usuário não encontrado." />}
    </div>
  );
};
