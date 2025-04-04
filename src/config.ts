// Default hard-coded values
export const CONFIG: {
  AP_USCB_PUBLIC: string
  AP_USCB_ENVIRONMENT: string
} = {
  AP_USCB_PUBLIC: '',
  AP_USCB_ENVIRONMENT: 'local',
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_USCB_PUBLIC) {
    CONFIG.AP_USCB_PUBLIC = process.env.AP_USCB_PUBLIC
  }
  if (process.env.AP_USCB_ENVIRONMENT) {
    CONFIG.AP_USCB_ENVIRONMENT = process.env.AP_USCB_ENVIRONMENT
  }
} catch (error) {
  console.warn('Failed to load from process.env')
}

console.log('CONFIG')
Object.keys(CONFIG).forEach((confKey) => {
  // @ts-ignore
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})
