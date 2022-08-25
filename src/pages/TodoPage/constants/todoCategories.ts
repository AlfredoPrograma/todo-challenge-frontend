import { SelectOption } from 'components/Select'

type TodoCategoriesValues = 'home' | 'work' | 'study' | 'workout' | 'cooking' | 'others'

interface TodoCategory {
  text: string
  color: string
}

type TodoCategoriesMap = Record<TodoCategoriesValues, TodoCategory>

const CATEGORY_BADGE_MAP: TodoCategoriesMap = {
  work: {
    text: 'Work',
    color: '#03a9f4'
  },

  home: {
    text: 'Home',
    color: '#009688'
  },

  study: {
    text: 'Study',
    color: '#cddc39'
  },

  cooking: {
    text: 'Cooking',
    color: '#a82ffc'
  },

  workout: {
    text: 'Workout',
    color: '#ff5d5d'
  },

  others: {
    text: 'Others',
    color: '#eae32d'
  }
}

const CATEGORIES_OPTIONS: SelectOption[] = [
  {
    text: 'Home',
    value: 'home'
  },
  {
    text: 'Work',
    value: 'work'
  },
  {
    text: 'Study',
    value: 'study'
  },
  {
    text: 'Workout',
    value: 'workout'
  },
  {
    text: 'Cooking',
    value: 'cooking'
  },
  {
    text: 'Others',
    value: 'others'
  }
]

export type { TodoCategoriesValues }
export { CATEGORY_BADGE_MAP, CATEGORIES_OPTIONS }
