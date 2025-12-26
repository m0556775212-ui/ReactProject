
export const LogoutService = (
    navigate: (path: string) => void,
    state: { token: string | null },
    dispatch: React.Dispatch<any>
) =>{
  
    dispatch({ type: 'LOGOUT', payload: { token: state.token} });
    navigate("/login");
  };
