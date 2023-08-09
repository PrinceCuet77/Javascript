// Without PDL login, should be loaded only the male or female avatar
const withoutWintosJR = avatars.data.filter(
  (avatar) =>
    avatar.name !== 'WintosJR1' &&
    avatar.name !== 'WintosJR2' &&
    avatar.name !== 'WintosJR3'
)

let result
try {
  result = await super.create(
    {
      ...data,
      ...identityProvider,
      user: {
        id: userId,
        isGuest,
        inviteCode: type === 'guest' ? null : code,
        avatarId: withoutWintosJR[random(withoutWintosJR.length - 1)].id,
      },
    },
    params
  )
} catch (err) {
  console.error(err)
  await this.app.service('user').remove(userId)
  throw err
}
