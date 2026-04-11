import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const reviewsEn = [
  { name: 'Evelyn Reyes', text: 'Excellent professional, she loves to teach, has patience, and a great methodology so students can understand English.' },
  { name: 'Dolly', text: 'My experience with Miss Angela was very rewarding, her classes are interactive, she identified my weaknesses and her methodology helped me correct them. Highly recommended.' },
  { name: 'Vishal Arora', text: 'Hardworking, dedicated and professional teacher. Her classes were really fun.' },
  { name: 'Jorge Villar-Cordova', text: 'Excellent English teacher. Very educational and charismatic.' },
  { name: 'Pedro Aparcana', text: 'I had the opportunity to learn English in a practical and simple way with Miss Angela through real-life cases. Among her strengths are patience and a commitment to achieving class objectives, with a focus on continuous student learning.' },
  { name: 'Luis Loayza', text: 'Angela is a great professional, she is very enthusiastic about her work and that energy transfers to her students so they can achieve their study goals.' },
  { name: 'Andrea Concha Silva', text: 'She makes herself understood, is comprehensive, helps you understand, is dynamic, and cares about her students.' },
  { name: 'Jhonatan', text: 'She is a very patient teacher who adapts to the student\'s learning pace and has a very good teaching methodology.' },
  { name: 'Manuel', text: 'I greatly value Angela\'s work because she is professional and respectful toward her students.' },
  { name: 'Jorge Ayala', text: 'Angela taught with great patience to people who find the language difficult.' },
  { name: 'Betsy Bernal', text: "Miss Angela is the best teacher in the world, I couldn't ask for a better teacher. I feel more confident with my English now." },
  { name: 'Roberto', text: 'She was one of the best teachers I ever had. Very kind, she masters the language and makes you feel comfortable learning. I totally recommend her.' },
  { name: 'Jonnier R.', text: 'Very dynamic and above all very clear in her explanations, it\'s worth learning English this way!' },
  { name: 'Karla Soudre', text: 'Miss Angela is an excellent teacher with a lot of patience, her learning method helps you get great results to improve your English. She supports you at all times. 100% RECOMMENDED.' },
  { name: 'Cinthia Zarabia', text: 'It was a great experience having her as a teacher, she was very kind and her English level is very good.' },
  { name: 'Daniela', text: 'When Miss Angela was my teacher, she explained classes very well and I understood everything. She always gave us examples on topics covered and has a great attitude when teaching.' },
  { name: 'Luis Lopez', text: 'Very good, dedicated and caring about her students. Very happy to have had her as a teacher.' },
  { name: 'Manuel Villar', text: 'Among the people who have taught me English, she is one of the best — didactic in teaching and giving advice to improve pronunciation and expand vocabulary. If you want to improve your fluency and correct mistakes, she is the right person.' },
  { name: 'David', text: 'Very good teacher, attentive, dynamic, and a great person. I recommend her.' },
  { name: 'Rachel Aguilar', text: 'Very good teacher, great pronunciation, good energy and dynamism. She captures my attention since her classes are quite interesting. Excellent!' },
  { name: 'Cesar Saenz', text: 'Very practical and enjoyable in her classes, and very willing to solve doubts. Great teacher.' },
  { name: 'Claudymarx Zerpa', text: 'Excellent teacher and very good teaching!' },
  { name: 'Víctor García', text: 'Excellent! Very professional. She handles the English language perfectly and makes learning entertaining. She has a gift for teaching and a lot of patience. Excellent person.' },
  { name: 'Sam', text: 'Angela is a teacher who really cares about her students. She comes to the classroom prepared and ready to teach. Her lessons are engaging and fun. I can recommend Angela as a teacher of the highest order!' },
  { name: 'Elier', text: 'Great, excellent teacher!' },
  { name: 'Adalaura', text: 'She has great learning strategies, patience when teaching, and motivates you to keep learning more.' },
]

const reviewsEs = [
  { name: 'Evelyn Reyes', text: 'Excelente profesional, le gusta enseñar, tiene paciencia, metodología para que el alumno pueda entender el Inglés.' },
  { name: 'Dolly', text: 'Mi experiencia con Miss Ángela fue bastante gratificante, sus clases son interactivas, identificó mis falencias y su metodología me ayudó a corregirlas. Muy recomendable.' },
  { name: 'Vishal Arora', text: 'Trabajadora, dedicada y profesional. Sus clases fueron muy divertidas.' },
  { name: 'Jorge Villar-Cordova', text: 'Excelente profesora de inglés. Muy didáctico y carismático.' },
  { name: 'Pedro Aparcana', text: 'Tuve la oportunidad de aprender Inglés de forma práctica y sencilla con Miss Angela a través de casos reales. Dentro de las fortalezas que la caracterizan son la paciencia y orientación a cumplir el objetivo de las clases.' },
  { name: 'Luis Loayza', text: 'Ángela es una gran profesional, ella es muy entusiasta en su trabajo y eso transmite a las personas para que logren sus objetivos en el estudio.' },
  { name: 'Andrea Concha Silva', text: 'Se deja entender, es comprensiva, ayuda a que uno entienda, es dinámica, se preocupa por el estudiante.' },
  { name: 'Jhonatan', text: 'Es una profesora muy paciente con el ritmo de aprendizaje del estudiante y tiene una muy buena metodología de enseñanza.' },
  { name: 'Manuel', text: 'Valoro mucho el trabajo de Angela, porque es profesional y respetuosa ante sus alumnos.' },
  { name: 'Jorge Ayala', text: 'Ángela enseñaba con mucha paciencia a las personas que se le hace difícil el idioma.' },
  { name: 'Betsy Bernal', text: 'Miss Angela es la mejor profesora del mundo, no podría pedir una mejor profesora. Me siento más segura con mi inglés ahora.' },
  { name: 'Roberto', text: 'Fue una de las mejores profesoras que tuve. Muy amable, domina el idioma y te hace sentir cómodo con el aprendizaje. La recomiendo totalmente.' },
  { name: 'Jonnier R.', text: 'Muy dinámica y sobretodo muy clara en sus explicaciones, vale la pena aprender Inglés así!' },
  { name: 'Karla Soudre', text: 'Miss Angela es una excelente profesora con mucha paciencia, su método de aprendizaje te ayuda a obtener buenos resultados para mejorar tu inglés. 100% RECOMENDADA.' },
  { name: 'Cinthia Zarabia', text: 'Fue buena la experiencia de tenerla como maestra, era muy amable y su nivel de inglés es muy bueno.' },
  { name: 'Daniela', text: 'Cuando la Miss Angela era mi profesora, explicaba muy bien las clases, y le entendía todo, aparte siempre nos daba ejemplos sobre los temas vistos.' },
  { name: 'Luis Lopez', text: 'Muy buena, dedicada y preocupada por sus alumnos. Muy contento de haberla tenido de profesora.' },
  { name: 'Manuel Villar', text: 'Entre las personas que me han enseñado inglés, ella es una de las mejores, didáctica al enseñar y dar consejos para mejorar la pronunciación y ampliar el vocabulario.' },
  { name: 'David', text: 'Muy buena profesora atenta, dinámica, y una genial persona. La recomiendo.' },
  { name: 'Rachel Aguilar', text: 'Muy buena profesora, tiene muy buena pronunciación, buena energía y dinamismo. Sus clases son bastante interesantes. Excelente!' },
  { name: 'Cesar Saenz', text: 'Muy práctica y amena para dar sus clases, y muy dispuesta a solucionar las dudas. Muy buena profesora.' },
  { name: 'Claudymarx Zerpa', text: 'Excelente maestra y enseñanza muy buena!' },
  { name: 'Víctor García', text: 'Excelente! Muy profesional. Maneja el idioma inglés perfectamente y hace que puedas comprender de una manera entretenida. Tiene facilidad para la enseñanza y mucha paciencia.' },
  { name: 'Sam', text: 'Angela es una profesora que realmente se preocupa por sus estudiantes. Llega al aula preparada y lista para enseñar. Sus clases son interesantes y divertidas. Puedo recomendar a Angela como una profesora de primer nivel!' },
  { name: 'Elier', text: '¡Gran y excelente profesora!' },
  { name: 'Adalaura', text: 'Tienes buenas estrategias de aprendizaje, paciencia a la hora de enseñar, motiva a seguir aprendiendo más.' },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
      <Stars />
      <p className="text-sm text-navy/60 leading-relaxed mb-4 line-clamp-4">"{review.text}"</p>
      <p className="text-sm font-semibold text-navy">{review.name}</p>
    </div>
  )
}

export default function Testimonials() {
  const { t, i18n } = useTranslation()
  const reviews = i18n.language === 'es' ? reviewsEs : reviewsEn

  return (
    <section className="py-28 md:py-40 bg-pink-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
            {t('testimonials.label')}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy max-w-3xl">
            {t('testimonials.title')}
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-scroll">
          {reviews.map((r, i) => (
            <ReviewCard key={`a-${i}`} review={r} />
          ))}
          {reviews.map((r, i) => (
            <ReviewCard key={`b-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
