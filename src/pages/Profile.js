import { Changeprofile } from "../Components/Changeprofile";
export const Profile = (props) => {
  return (
    <div>
      <p> This is the Profile Page of:{props.userName}</p>
      <br />

      <Changeprofile setUsername={props.setUsername} />
    </div>
  );
};
