import styled from 'styled-components'
// import props from './profile-data'
import Button from './button'
import Icon from './icon'


const ProfileStyled = styled.div`
  grid-area: profile;
  /* background-color: yellow; */
  .avatar{
    border-radius: 50%;
    border: 1px solid var(--grey1);
    overflow:hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name{
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: .5rem;
  }
  .username{
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-light);
  }
  .info{
    /* border: 1px solid red; */
    color: var(--grey1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover{
    text-decoration: underline;
  }
  .buttons{
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }

  @media screen and (max-width: 500px) {

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:auto(4);
    grid-template-areas: 'profileUser' 'profileInfo' 'buttons' ;
    align-items: center;
    .avatar{
      block-size: 5rem;
      inline-size: 5rem;
    }
    .profileUser{
      grid-area:profileUser;
      display: flex;
      gap: 1rem;
    }
    .buttons{
      grid-area: buttons;
    }
    .profileInfo{
      grid-area: profileInfo;
    }

  }
  

`

function Profile(props) {
  const { twitter_username, blog, name, login, avatar_url, bio, followers, following, location } = props

  return (
    <ProfileStyled>
      <Icon />
      <div className='profileUser'>
        <img src={avatar_url} className='avatar' width='278' height='278' alt=''></img>
        <div className='profileName'>

          <p className='name'>{name}</p>
          <p className='username'>{login}</p>
        </div>
      </div>

      <div className='buttons'>
        <Button
          text="Follow"
          link="#"
          className="custom"
        />
        <Button
          text="Sponsor"
          icon={<Icon
            name="heart"
            color="var(--pink)"
          />}
        />
      </div>
      <div className='profileInfo'>
        <p className='bio info'>{bio}</p>
        <p className='followers info'> <Icon name="user" size={24} color="var(--grey)" /> {followers}<span>followers</span> <span>|</span> {following} <span>following</span> </p>
        {/* <p className='stars info'> 81</p> */}
        <p className='location info'> <Icon name="location" size={24} color="var(--grey)" /> {location}</p>
        <a className='info' href={blog} target='_blank' rel='noreferrer'><Icon name="link" size={24} color="var(--grey)" />{blog}</a>
        <a className='info' href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'> <Icon name="twitter" size={24} color="var(--grey)" />@{twitter_username}</a>
      </div>
    </ProfileStyled>
  )
}

export default Profile
