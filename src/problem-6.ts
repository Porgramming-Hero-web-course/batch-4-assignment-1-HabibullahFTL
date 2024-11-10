interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, partialObj: Partial<Profile>): Profile => {
  return { ...obj, ...partialObj };
};

const myProfile = { name: 'Alice', age: 25, email: 'alice@example.com' };
console.log(updateProfile(myProfile, { email: 'hb@gmail.com' }));
