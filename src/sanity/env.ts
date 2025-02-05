export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'skA1PeBDk5NoUfxxdDr58NSVpGhkXoof8MVopX0cQSksByKezJFJemwotxrg4KKHS56QAgFHCZ4wbm4odAgYoxaDqNpXAZ06BhnktN1dkLpjIz63HXBBzvypKyWS7i1Pf2Ju9mAgn7OFBg9jX64bglN8OpAgpgiIz51QkPLTm9yLiAhjs364',
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}