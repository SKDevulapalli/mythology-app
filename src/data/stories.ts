import type { Story } from '../types';

// Character image paths - cute 192x192 childhood Hindu god images
const characterImages: Record<string, string> = {
  'Krishna': '/images/krishna.png',
  'Ganesha': '/images/ganesha.png',
  'Hanuman': '/images/hanuman.png',
  'Rama': '/images/rama.png',
  'Prahlada': '/images/prahlada.png',
  'Shiva': '/images/shiva.png',
  'Vishnu': '/images/vishnu.png',
  'Lakshmi': '/images/lakshmi.png',
  'Saraswati': '/images/saraswati.png',
  'Durga': '/images/durga.png',
  'Arjuna': '/images/arjuna.png',
  'Draupadi': '/images/draupadi.png',
  'Sita': '/images/sita.png',
  'Lakshmana': '/images/lakshmana.png',
  'Karthikeya': '/images/karthikeya.png',
  'Narasimha': '/images/narasimha.png',
  'Buddha': '/images/buddha.png',
  'Kali': '/images/kali.png',
  'Parvati': '/images/parvati.png',
  'Indra': '/images/indra.png',
};

export const stories: Story[] = [
  {
    id: 'krishna-butter',
    title: 'Krishna and the Sweet Butter',
    description: 'Join young Krishna as he learns about honesty and sharing through a playful adventure with butter!',
    ageRange: '5-7',
    character: 'Krishna',
    values: ['honesty', 'compassion'],
    illustration: characterImages['Krishna'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Butter Pot',
        content: `In the beautiful village of Vrindavan, there lived a young boy named Krishna. He was known for his playful nature and his love for sweet things, especially butter!

Every morning, Krishna's mother Yashoda would churn fresh butter and store it in clay pots hanging from the ceiling. The butter was so creamy and delicious that Krishna couldn't resist it.

One sunny morning, Krishna saw the butter pots swinging gently in the breeze. His eyes sparkled with mischief. "I wonder what that butter tastes like," he thought to himself.`,
        illustration: '🏠',
        interactiveElements: [
          {
            id: 'ie1',
            type: 'character',
            position: { x: 50, y: 30 },
            title: 'Krishna',
            content: 'Krishna is a playful and curious young boy who loves adventures!'
          },
          {
            id: 'ie2',
            type: 'object',
            position: { x: 70, y: 50 },
            title: 'Butter Pot',
            content: 'Fresh butter made from cow\'s milk, stored in clay pots to keep it cool.'
          }
        ]
      },
      {
        id: 'ch2',
        title: 'A Difficult Choice',
        content: `Krishna stood on his tiptoes, but the butter pots were too high! He looked around and saw a small stool nearby. He could climb on it to reach the butter.

But then he remembered what his mother had told him: "Always ask before taking something that isn't yours, Krishna."

Krishna felt confused. He really wanted the butter, but he also wanted to be good. What should he do?`,
        illustration: '🤔',
        decisionPoint: {
          id: 'dp1',
          question: 'What should Krishna do?',
          options: [
            {
              id: 'opt1',
              text: 'Take the butter without asking',
              consequence: 'Krishna climbs up and takes the butter. It tastes delicious, but when Yashoda finds out, she feels sad that Krishna didn\'t ask. She explains that taking things without permission makes others feel upset.',
              lesson: 'Taking things without asking can hurt others\' feelings, even if we really want something.'
            },
            {
              id: 'opt2',
              text: 'Ask mother for permission first',
              consequence: 'Krishna goes to his mother and asks politely. Yashoda smiles warmly and says, "Of course, my dear! I\'m so proud that you asked. Let\'s share the butter together!" They enjoy the butter together, and Krishna learns that asking makes everything more special.',
              lesson: 'Asking permission shows respect and care for others. It also makes sharing more fun!'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Learning to Share',
        content: `After their conversation, Yashoda taught Krishna an important lesson about sharing. "When we share what we have," she said, "everyone feels happy. The butter tastes even sweeter when we enjoy it together!"

Krishna realized that sharing with others made him feel warm and happy inside. From that day on, whenever he wanted something, he would always ask first. And when he had something special, he would share it with his friends and family.

The village children loved playing with Krishna because he was kind and always willing to share.`,
        illustration: '🤗',
        interactiveElements: [
          {
            id: 'ie3',
            type: 'concept',
            position: { x: 50, y: 40 },
            title: 'Sharing',
            content: 'Sharing means giving some of what you have to others. It makes everyone happy!'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Why is it important to ask before taking something?',
            options: [
              'Because it shows respect for others',
              'Because it makes things taste better',
              'Because it\'s a rule',
              'Because everyone does it'
            ],
            correctAnswer: 0,
            explanation: 'Asking before taking shows that we care about others\' feelings and respect their belongings.'
          },
          {
            id: 'q2',
            question: 'What did Krishna learn about sharing?',
            options: [
              'Sharing is difficult',
              'Sharing makes everyone happy',
              'Sharing is only for adults',
              'Sharing doesn\'t matter'
            ],
            correctAnswer: 1,
            explanation: 'Sharing makes everyone feel happy, including the person who shares!'
          }
        ]
      }
    ]
  },
  {
    id: 'ganesha-mahabharata',
    title: 'Ganesha and the Great Story',
    description: 'Discover how wise Ganesha helped write one of the greatest stories ever told!',
    ageRange: '8-10',
    character: 'Ganesha',
    values: ['wisdom', 'perseverance'],
    illustration: characterImages['Ganesha'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Sage\'s Request',
        content: `Long ago, there was a wise sage named Vyasa who had a brilliant idea. He wanted to write the Mahabharata, an epic story about great heroes, battles, and important lessons.

But there was a problem - the story was so long and complex that Vyasa needed someone to write it down as he spoke. He thought and thought about who could help him.

One day, Vyasa prayed to the gods for help. Suddenly, Ganesha, the elephant-headed god of wisdom, appeared before him!`,
        illustration: '📜'
      },
      {
        id: 'ch2',
        title: 'A Clever Agreement',
        content: `Ganesha agreed to write down the story, but he had one condition: "I will write, but you must speak continuously without stopping. If you pause, I will stop writing forever."

Vyasa smiled and agreed, but he was clever too. He added his own condition: "I will speak continuously, but you must understand everything I say before writing it down."

And so began the writing of the Mahabharata! Vyasa would speak complex verses, and while Ganesha thought about their meaning, Vyasa could catch his breath.`,
        illustration: '✍️',
        decisionPoint: {
          id: 'dp1',
          question: 'What does this teach us about working together?',
          options: [
            {
              id: 'opt1',
              text: 'We should always get our way',
              consequence: 'If we only think about ourselves, we might miss the chance to create something amazing together.',
              lesson: 'Working together means finding solutions that help everyone.'
            },
            {
              id: 'opt2',
              text: 'We can find creative solutions together',
              consequence: 'By working together and being creative, Vyasa and Ganesha created one of the greatest stories ever written!',
              lesson: 'When we work together and think creatively, we can achieve amazing things!'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Great Story is Born',
        content: `For many days and nights, Ganesha wrote while Vyasa spoke. The story grew longer and more wonderful with each passing moment. It contained tales of courage, friendship, duty, and wisdom.

When they finished, the Mahabharata had over 100,000 verses! It became one of the most important stories in Hindu mythology, teaching people about dharma (doing what is right) and the importance of making good choices.

Ganesha's wisdom and patience, combined with Vyasa's knowledge, created something truly special that people still read and learn from today.`,
        illustration: '🌟',
        quiz: [
          {
            id: 'q1',
            question: 'What quality helped Ganesha write the entire Mahabharata?',
            options: [
              'Speed',
              'Patience and wisdom',
              'Luck',
              'Magic'
            ],
            correctAnswer: 1,
            explanation: 'Ganesha\'s patience and wisdom helped him understand and write down the complex story.'
          }
        ]
      }
    ]
  },
  {
    id: 'hanuman-ocean',
    title: 'Hanuman\'s Great Leap',
    description: 'Follow Hanuman as he shows incredible courage and devotion by leaping across the ocean!',
    ageRange: '8-10',
    character: 'Hanuman',
    values: ['courage', 'devotion'],
    illustration: characterImages['Hanuman'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Search for Sita',
        content: `Rama, the prince of Ayodhya, was searching for his beloved wife Sita, who had been taken away by the demon king Ravana. Rama and his brother Lakshmana traveled far and wide, but couldn't find her.

They met a group of monkeys led by Sugriva, who promised to help. Among these monkeys was Hanuman, who was known for his incredible strength and devotion to Rama.

When they discovered that Sita was on the island of Lanka, far across the ocean, everyone wondered: "How can we reach her?"`,
        illustration: '🌊'
      },
      {
        id: 'ch2',
        title: 'The Impossible Task',
        content: `The ocean was vast and dangerous. No one knew how to cross it. Some monkeys were afraid. Some thought it was impossible.

But Hanuman stepped forward. He remembered his devotion to Rama and felt a surge of courage. "I will leap across the ocean to find Sita!" he declared.

The other monkeys were amazed. The ocean was hundreds of miles wide! But Hanuman's faith and courage gave him strength.`,
        illustration: '💪',
        decisionPoint: {
          id: 'dp1',
          question: 'What gave Hanuman the courage to attempt this impossible task?',
          options: [
            {
              id: 'opt1',
              text: 'He thought he was the strongest',
              consequence: 'While strength is important, it was Hanuman\'s devotion and love for Rama that truly gave him power.',
              lesson: 'Love and devotion can give us strength we never knew we had.'
            },
            {
              id: 'opt2',
              text: 'His devotion to Rama gave him strength',
              consequence: 'Hanuman\'s deep love and devotion to Rama filled him with incredible courage and power. When we believe in something strongly and care deeply, we can achieve amazing things!',
              lesson: 'When we have strong faith and devotion, we can overcome even the biggest challenges.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Great Leap',
        content: `Hanuman took a deep breath, focused on Rama in his heart, and leaped into the air! He flew higher and higher, across the vast ocean, over mountains and clouds.

His devotion gave him the power to grow larger and fly faster. He encountered many challenges - storms, sea monsters, and magical obstacles - but his faith in Rama helped him overcome them all.

Finally, he reached the island of Lanka and found Sita. Hanuman's courage and devotion had made the impossible possible!`,
        illustration: '🚀',
        quiz: [
          {
            id: 'q1',
            question: 'What helped Hanuman overcome the challenges?',
            options: [
              'Only his physical strength',
              'His devotion and faith',
              'Luck',
              'Magic powers alone'
            ],
            correctAnswer: 1,
            explanation: 'Hanuman\'s devotion to Rama gave him the strength and courage to overcome all obstacles.'
          }
        ]
      }
    ]
  },
  {
    id: 'rama-bow',
    title: 'Rama and the Broken Bow',
    description: 'Witness young Rama\'s incredible strength and dharma as he breaks the divine bow!',
    ageRange: '11-12',
    character: 'Rama',
    values: ['dharma', 'courage', 'determination'],
    illustration: characterImages['Rama'],
    estimatedMinutes: 12,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Contest',
        content: `King Janaka of Mithila had a beautiful daughter named Sita. Many princes wanted to marry her, but Janaka had set a challenge: whoever could string the divine bow of Lord Shiva would win Sita's hand in marriage.

This was no ordinary bow. It was massive, made of divine metal, and so heavy that even the strongest warriors couldn't lift it. Many princes tried and failed, returning home disappointed.

When Rama and his brother Lakshmana arrived with their teacher Vishwamitra, they saw the bow in the palace courtyard.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'The Test of Strength',
        content: `Rama approached the bow. Everyone watched in silence. Some thought he was too young. Others whispered that even great warriors had failed.

Rama touched the bow gently, feeling its divine energy. He understood that this wasn't just about strength - it was about dharma, about doing what is right with pure intention.

With calm determination, Rama lifted the bow. The crowd gasped. Then, as he tried to string it, the bow broke in two with a sound like thunder!`,
        illustration: '⚡',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Rama\'s breaking of the bow teach us?',
          options: [
            {
              id: 'opt1',
              text: 'Physical strength is everything',
              consequence: 'While strength matters, Rama\'s success came from his pure heart and commitment to dharma, not just physical power.',
              lesson: 'True strength comes from inner qualities like integrity and doing what is right.'
            },
            {
              id: 'opt2',
              text: 'Dharma and pure intention create true power',
              consequence: 'Rama\'s commitment to dharma and his pure heart gave him the strength to accomplish what seemed impossible. When we act with good intentions and follow our principles, we can achieve great things!',
              lesson: 'When we act with dharma (righteousness) and pure intentions, we can overcome even the greatest challenges.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Victory',
        content: `The entire kingdom celebrated! Rama had not only strung the bow but broken it, proving his divine nature and commitment to dharma.

King Janaka was overjoyed. He knew that Rama was the right person for Sita - someone who understood the importance of doing what is right, not just what is easy.

Rama and Sita were married, and their union became a symbol of dharma, love, and righteousness. This story teaches us that when we act with pure intentions and follow our principles, we can accomplish extraordinary things.`,
        illustration: '💍',
        quiz: [
          {
            id: 'q1',
            question: 'What made Rama able to break the divine bow?',
            options: [
              'Only his physical strength',
              'His commitment to dharma and pure intentions',
              'Magic',
              'Luck'
            ],
            correctAnswer: 1,
            explanation: 'Rama\'s success came from his commitment to dharma (righteousness) and his pure heart, not just physical strength.'
          }
        ]
      }
    ]
  },
  {
    id: 'prahlada-narasimha',
    title: 'Prahlada and Narasimha',
    description: 'Discover how young Prahlada\'s unwavering faith protected him from his father\'s anger!',
    ageRange: '11-12',
    character: 'Prahlada',
    values: ['faith', 'courage', 'devotion'],
    illustration: characterImages['Prahlada'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Devoted Son',
        content: `Prahlada was the son of the demon king Hiranyakashipu, who had gained great power and declared himself a god. He demanded that everyone worship only him.

But Prahlada, even as a young boy, had learned about Lord Vishnu from his teachers. He believed that Vishnu was the true protector and god, and he prayed to Vishnu every day.

This made his father very angry. "Why do you worship Vishnu instead of me?" he demanded.`,
        illustration: '👨‍👦'
      },
      {
        id: 'ch2',
        title: 'The Test of Faith',
        content: `Hiranyakashipu tried everything to make Prahlada stop worshipping Vishnu. He threatened him, punished him, and even tried to kill him. But Prahlada's faith never wavered.

"Vishnu is everywhere," Prahlada would say. "In the pillars, in the walls, in every atom of the universe."

Finally, in a fit of rage, Hiranyakashipu pointed to a pillar and said, "If Vishnu is everywhere, is he in this pillar?" Prahlada calmly replied, "Yes, father, he is."`,
        illustration: '🏛️',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Prahlada\'s unwavering faith teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should always obey our parents',
              consequence: 'While respecting parents is important, Prahlada shows that sometimes we must stand up for what we believe is right, even when it\'s difficult.',
              lesson: 'We should respect our parents, but also have the courage to stand for our principles.'
            },
            {
              id: 'opt2',
              text: 'True faith gives us courage to stand for what is right',
              consequence: 'Prahlada\'s deep faith gave him the courage to stand up for what he believed, even when facing great danger. When we have strong beliefs and act on them with courage, we can overcome fear!',
              lesson: 'True faith and conviction give us the strength to stand up for what is right, even in the face of great challenges.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Divine Protection',
        content: `Hiranyakashipu struck the pillar with his mace. To everyone's amazement, the pillar split open and Lord Narasimha - half-man, half-lion - emerged!

Narasimha was a special form of Vishnu, created to protect Prahlada. He defeated Hiranyakashipu, showing that true faith and devotion are always protected.

Prahlada became a great king, known for his wisdom, compassion, and devotion. His story teaches us that when we have unwavering faith in what is good and right, we will always be protected.`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'What protected Prahlada from his father\'s anger?',
            options: [
              'His physical strength',
              'His unwavering faith and devotion',
              'Magic',
              'Luck'
            ],
            correctAnswer: 1,
            explanation: 'Prahlada\'s unwavering faith in Vishnu and his courage to stand for what was right protected him.'
          }
        ]
      }
    ]
  },
  {
    id: 'shiva-necklace',
    title: 'Shiva and the Poison',
    description: 'Learn how Lord Shiva saved the world by drinking poison to protect all living beings!',
    ageRange: '8-10',
    character: 'Shiva',
    values: ['compassion', 'sacrifice', 'courage'],
    illustration: characterImages['Shiva'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Churning of the Ocean',
        content: `Long ago, the gods and demons decided to work together to churn the cosmic ocean. They hoped to find the nectar of immortality that would make them live forever.

They used a giant mountain as a churning rod and a great serpent as the rope. As they churned, many wonderful things emerged from the ocean - beautiful gems, the moon, and even a wish-fulfilling cow!

But then something terrible happened.`,
        illustration: '🌊'
      },
      {
        id: 'ch2',
        title: 'The Deadly Poison',
        content: `A dark, deadly poison called Halahala emerged from the ocean! It was so toxic that it threatened to destroy all of creation. The gods and demons were terrified and didn't know what to do.

They ran to Lord Shiva, the great protector, and begged for help. Shiva looked at the poison and then at all the living beings who would be harmed. He made a decision that would save everyone.`,
        illustration: '☠️',
        decisionPoint: {
          id: 'dp1',
          question: 'What should Shiva do about the deadly poison?',
          options: [
            {
              id: 'opt1',
              text: 'Let someone else handle it',
              consequence: 'If no one takes responsibility, the poison would destroy everything. Sometimes we must step up to protect others.',
              lesson: 'Great leaders take responsibility to protect those who need help.'
            },
            {
              id: 'opt2',
              text: 'Drink the poison to save everyone',
              consequence: 'Shiva drank the poison to save all living beings! His wife Parvati quickly held his throat to prevent the poison from spreading, turning it blue. Shiva\'s selfless act saved the entire universe!',
              lesson: 'Sometimes we must make sacrifices to protect others and do what is right.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Blue-Throated God',
        content: `Shiva drank the poison, and Parvati immediately held his throat to stop it from spreading through his body. The poison stayed in his throat, turning it blue forever. That's why Shiva is also called Neelkanth, the blue-throated one.

Shiva's selfless act saved all of creation. The gods and demons were able to continue churning the ocean and eventually found the nectar of immortality.

This story teaches us about compassion and sacrifice - sometimes we must put others' needs before our own to protect what we care about.`,
        illustration: '💙',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Shiva drink the poison?',
            options: [
              'To become more powerful',
              'To save all living beings from destruction',
              'Because he was forced',
              'To show off'
            ],
            correctAnswer: 1,
            explanation: 'Shiva drank the poison out of compassion to save all living beings from destruction.'
          }
        ]
      }
    ]
  },
  {
    id: 'vishnu-kurma',
    title: 'Vishnu as the Turtle',
    description: 'Discover how Lord Vishnu helped the gods by becoming a giant turtle!',
    ageRange: '5-7',
    character: 'Vishnu',
    values: ['helpfulness', 'wisdom', 'compassion'],
    illustration: characterImages['Vishnu'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Heavy Mountain',
        content: `When the gods and demons were churning the ocean, they needed something to hold up the giant mountain they were using. The mountain was so heavy that it started sinking into the ocean!

Everyone was worried. "How can we continue if the mountain keeps sinking?" they asked.

Then Lord Vishnu, the preserver of the universe, had an idea. He would transform himself into something that could help!`,
        illustration: '⛰️'
      },
      {
        id: 'ch2',
        title: 'The Helpful Turtle',
        content: `Vishnu transformed into Kurma, a giant divine turtle! He dove into the ocean and positioned himself under the mountain, holding it up on his strong shell.

Now the mountain was stable, and the gods and demons could continue churning the ocean. The turtle's shell was perfect for supporting the heavy weight.

Everyone was amazed and grateful. "Thank you, Lord Vishnu!" they said.`,
        illustration: '🐢',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Vishnu\'s transformation teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should only help when it\'s easy',
              consequence: 'Sometimes helping others requires us to be creative and do things that might be difficult, but it\'s worth it!',
              lesson: 'Helping others sometimes requires creativity and effort.'
            },
            {
              id: 'opt2',
              text: 'We should help others in creative ways',
              consequence: 'Vishnu found a creative way to help everyone! When we think creatively and are willing to help, we can solve problems and make things better for everyone.',
              lesson: 'Being helpful and creative can solve problems and make the world better!'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Success!',
        content: `With Kurma the turtle holding up the mountain, the churning continued successfully. Many wonderful things emerged from the ocean, and eventually, they found the nectar of immortality.

Vishnu's willingness to transform and help shows us that when we're creative and willing to help others, we can accomplish amazing things together!

The story of Kurma teaches us that sometimes we need to be flexible and find creative solutions to help those around us.`,
        illustration: '🌟',
        quiz: [
          {
            id: 'q1',
            question: 'How did Vishnu help the gods and demons?',
            options: [
              'By fighting them',
              'By becoming a turtle to hold up the mountain',
              'By running away',
              'By doing nothing'
            ],
            correctAnswer: 1,
            explanation: 'Vishnu transformed into Kurma, a giant turtle, to hold up the heavy mountain so the churning could continue.'
          }
        ]
      }
    ]
  },
  {
    id: 'lakshmi-emergence',
    title: 'Lakshmi\'s Beautiful Emergence',
    description: 'Meet the goddess of wealth and prosperity as she emerges from the ocean!',
    ageRange: '5-7',
    character: 'Lakshmi',
    values: ['compassion', 'generosity', 'love'],
    illustration: characterImages['Lakshmi'],
    estimatedMinutes: 7,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Ocean Churning',
        content: `As the gods and demons continued churning the cosmic ocean, something magical began to happen. The waters started to glow with a beautiful golden light.

Then, from the depths of the ocean, a beautiful goddess emerged! She was radiant, wearing golden clothes and holding lotus flowers. This was Lakshmi, the goddess of wealth, prosperity, and good fortune.

Everyone was amazed by her beauty and grace.`,
        illustration: '🌊'
      },
      {
        id: 'ch2',
        title: 'The Gift of Prosperity',
        content: `Lakshmi smiled at everyone and began to bless them. But she didn't just give material wealth - she taught them about true prosperity.

"True wealth," she said, "isn't just about having things. It's about sharing, being kind, and helping others. When we share what we have, we become truly rich."

She chose Lord Vishnu as her companion, showing that true prosperity comes when we live with dharma and righteousness.`,
        illustration: '💝',
        decisionPoint: {
          id: 'dp1',
          question: 'What is true wealth according to Lakshmi?',
          options: [
            {
              id: 'opt1',
              text: 'Having lots of money and things',
              consequence: 'While material things can be nice, Lakshmi teaches that true wealth comes from sharing and being kind to others.',
              lesson: 'Material wealth alone doesn\'t make us truly rich.'
            },
            {
              id: 'opt2',
              text: 'Sharing, kindness, and helping others',
              consequence: 'Lakshmi teaches that true prosperity comes from sharing what we have, being kind, and helping others. When we do this, we become truly wealthy in the ways that matter most!',
              lesson: 'True wealth comes from generosity, kindness, and helping others.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Blessings for All',
        content: `Lakshmi blessed everyone who was kind, generous, and followed dharma. She showed that prosperity isn't just about having things - it's about having a good heart and sharing with others.

From that day on, people learned that true wealth comes from:
- Being generous and sharing
- Being kind to others
- Following dharma (doing what is right)
- Helping those in need

Lakshmi's story teaches us that the richest people are those who share their blessings with others!`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'What does Lakshmi teach us about true wealth?',
            options: [
              'Having lots of money',
              'Sharing, kindness, and helping others',
              'Keeping everything for yourself',
              'Being selfish'
            ],
            correctAnswer: 1,
            explanation: 'Lakshmi teaches that true wealth comes from sharing, being kind, and helping others.'
          }
        ]
      }
    ]
  },
  {
    id: 'saraswati-knowledge',
    title: 'Saraswati and the Gift of Learning',
    description: 'Meet Saraswati, the goddess of knowledge, music, and arts!',
    ageRange: '8-10',
    character: 'Saraswati',
    values: ['wisdom', 'learning', 'creativity'],
    illustration: characterImages['Saraswati'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Goddess of Learning',
        content: `Saraswati is the goddess of knowledge, music, arts, and learning. She is often shown sitting on a white lotus, playing a veena (a musical instrument), with a book in her hand and a white swan by her side.

She represents the power of learning and creativity. When students pray to her, they ask for wisdom and the ability to learn well.

One day, a young student named Ravi was struggling with his studies. He felt frustrated and wanted to give up.`,
        illustration: '🎓'
      },
      {
        id: 'ch2',
        title: 'The Power of Persistence',
        content: `Ravi prayed to Saraswati for help. That night, he had a dream where the goddess appeared to him.

"Learning takes time and patience," she said gently. "Every great scholar started where you are now. The key is to keep trying, to ask questions, and to never give up."

She showed him that learning is like playing music - it takes practice, but with dedication, beautiful things can be created.`,
        illustration: '🎵',
        decisionPoint: {
          id: 'dp1',
          question: 'What is the key to learning according to Saraswati?',
          options: [
            {
              id: 'opt1',
              text: 'Being naturally smart',
              consequence: 'While some people learn quickly, Saraswati teaches that persistence and practice are more important than natural talent.',
              lesson: 'Hard work and persistence matter more than natural talent.'
            },
            {
              id: 'opt2',
              text: 'Persistence, practice, and never giving up',
              consequence: 'Saraswati teaches that learning requires patience, practice, and persistence. When we keep trying and ask questions, we can learn anything!',
              lesson: 'Learning requires patience, practice, and the willingness to keep trying even when it\'s difficult.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Joy of Learning',
        content: `When Ravi woke up, he remembered Saraswati's words. He started studying with a new attitude - not as a burden, but as an adventure of discovery.

He asked questions, practiced regularly, and didn't give up when things were hard. Slowly, he began to understand and enjoy his studies.

Saraswati's story teaches us that learning is a gift. When we approach it with curiosity, patience, and persistence, we can discover amazing things and grow wiser every day!`,
        illustration: '💡',
        quiz: [
          {
            id: 'q1',
            question: 'What does Saraswati teach us about learning?',
            options: [
              'Only smart people can learn',
              'Learning requires patience, practice, and persistence',
              'Learning is always easy',
              'We should never ask questions'
            ],
            correctAnswer: 1,
            explanation: 'Saraswati teaches that learning requires patience, practice, persistence, and asking questions.'
          }
        ]
      }
    ]
  },
  {
    id: 'durga-mahishasura',
    title: 'Durga and the Demon',
    description: 'Witness the power of the goddess Durga as she protects the world from evil!',
    ageRange: '11-12',
    character: 'Durga',
    values: ['courage', 'justice', 'protection'],
    illustration: characterImages['Durga'],
    estimatedMinutes: 12,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Demon\'s Threat',
        content: `A powerful demon named Mahishasura had gained incredible strength through years of meditation and prayer. He became so powerful that he started attacking the gods and causing chaos everywhere.

The gods tried to stop him, but Mahishasura was too strong. He had a special power - he could only be defeated by a woman. But he thought no woman could ever be strong enough to defeat him.

The gods needed a solution. They decided to combine all their powers to create a powerful goddess.`,
        illustration: '⚔️'
      },
      {
        id: 'ch2',
        title: 'The Birth of Durga',
        content: `All the gods contributed their powers. Shiva gave his trident, Vishnu gave his discus, Indra gave his thunderbolt, and many other gods gave their weapons.

From this combined power, a magnificent goddess emerged - Durga! She had many arms, each holding a powerful weapon. She rode on a fierce lion and radiated strength and courage.

Mahishasura laughed when he saw her. "A woman? You think a woman can defeat me?" he mocked.`,
        illustration: '👸',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Durga\'s story teach us about strength?',
          options: [
            {
              id: 'opt1',
              text: 'Only men can be strong',
              consequence: 'Durga\'s story shows that strength comes in many forms, and anyone can be powerful when they stand for what is right.',
              lesson: 'Strength is not about gender - it\'s about courage and standing for justice.'
            },
            {
              id: 'opt2',
              text: 'True strength comes from courage and standing for justice',
              consequence: 'Durga shows that true strength comes from courage, determination, and standing up for what is right. When we combine our strengths and work together for justice, we can overcome any challenge!',
              lesson: 'True strength comes from courage, justice, and the willingness to protect others.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Victory',
        content: `Durga and Mahishasura fought a great battle. Despite the demon's tricks and transformations, Durga remained focused and determined. She used all her weapons and her wisdom to counter his attacks.

Finally, with her trident, she defeated Mahishasura, restoring peace and order to the universe.

Durga's story teaches us that when we stand up for what is right, when we protect those who need help, and when we use our strength wisely, we can overcome any challenge. True power comes from courage, justice, and the willingness to fight for what is good.`,
        illustration: '🏆',
        quiz: [
          {
            id: 'q1',
            question: 'What does Durga\'s victory teach us?',
            options: [
              'Violence is always the answer',
              'Courage, justice, and protecting others can overcome evil',
              'Only the strongest win',
              'We should never fight'
            ],
            correctAnswer: 1,
            explanation: 'Durga\'s story teaches that courage, justice, and the willingness to protect others can overcome evil.'
          }
        ]
      }
    ]
  },
  {
    id: 'arjuna-focus',
    title: 'Arjuna and the Eye of the Fish',
    description: 'Learn how Arjuna mastered focus and concentration to become a great archer!',
    ageRange: '11-12',
    character: 'Arjuna',
    values: ['determination', 'focus', 'perseverance'],
    illustration: characterImages['Arjuna'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Challenge',
        content: `Arjuna was one of the five Pandava brothers, known for his incredible archery skills. His teacher, Drona, wanted to test which of his students had the best focus and concentration.

Drona set up a wooden bird high in a tree. He asked each student what they could see. Most students said they could see the tree, the branches, the leaves, and the bird.

But when it was Arjuna's turn, something was different.`,
        illustration: '🌳'
      },
      {
        id: 'ch2',
        title: 'Perfect Focus',
        content: `Drona asked Arjuna, "What do you see?"

Arjuna replied, "I see only the eye of the bird, teacher. Nothing else."

Drona was pleased. "That is perfect focus!" he said. "When you aim, you must see only your target. Everything else must fade away."

Arjuna released his arrow, and it hit the bird's eye perfectly. His ability to focus completely on his goal made him the greatest archer.`,
        illustration: '👁️',
        decisionPoint: {
          id: 'dp1',
          question: 'What made Arjuna successful?',
          options: [
            {
              id: 'opt1',
              text: 'Natural talent alone',
              consequence: 'While Arjuna had talent, his success came from his ability to focus completely on his goal and practice diligently.',
              lesson: 'Success requires both talent and focused practice.'
            },
            {
              id: 'opt2',
              text: 'Perfect focus and complete concentration on his goal',
              consequence: 'Arjuna\'s success came from his ability to focus completely on his target, ignoring all distractions. When we focus our full attention on our goals and practice with dedication, we can achieve great things!',
              lesson: 'Perfect focus and concentration on our goals, combined with practice, leads to success.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Lesson',
        content: `Arjuna's story teaches us about the power of focus and concentration. Whether we're studying, practicing a skill, or working toward a goal, giving it our complete attention makes all the difference.

When we focus fully on what we're doing:
- We can see our goals clearly
- We can ignore distractions
- We can achieve what seems impossible
- We become better at what we do

Arjuna became a legendary archer not just because of his skill, but because he learned to focus completely on his target. This is a lesson we can all use in our daily lives!`,
        illustration: '🌟',
        quiz: [
          {
            id: 'q1',
            question: 'What was the key to Arjuna\'s success?',
            options: [
              'Natural talent',
              'Perfect focus and concentration on his goal',
              'Luck',
              'Having the best bow'
            ],
            correctAnswer: 1,
            explanation: 'Arjuna\'s success came from his perfect focus and concentration, seeing only his target and nothing else.'
          }
        ]
      }
    ]
  },
  {
    id: 'draupadi-strength',
    title: 'Draupadi\'s Strength',
    description: 'Discover how Draupadi showed incredible courage and stood up for justice!',
    ageRange: '11-12',
    character: 'Draupadi',
    values: ['courage', 'justice', 'determination'],
    illustration: characterImages['Draupadi'],
    estimatedMinutes: 12,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Unjust Game',
        content: `Draupadi was the wife of the five Pandava brothers. One day, her husband Yudhishthira lost a game of dice and, in his desperation, even wagered Draupadi.

This was wrong - no one should be treated as property to be won or lost. But the Kauravas, who had cheated in the game, claimed they had won Draupadi and tried to humiliate her.

Draupadi found herself in a terrible situation, but she did not lose hope.`,
        illustration: '🎲'
      },
      {
        id: 'ch2',
        title: 'Standing Up for Justice',
        content: `Draupadi stood strong and questioned the injustice. "How can a person be won in a game?" she asked. "I am not property. I am a person with dignity and rights."

Even when the situation seemed hopeless, Draupadi maintained her dignity and courage. She called out the wrong that was being done to her.

Her strength and determination inspired others to see the injustice of what was happening.`,
        illustration: '💪',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Draupadi\'s story teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should accept injustice quietly',
              consequence: 'Draupadi shows us that we should never accept injustice. Standing up for what is right, even when it\'s difficult, is important.',
              lesson: 'We should always stand up against injustice.'
            },
            {
              id: 'opt2',
              text: 'We must stand up for justice and our dignity',
              consequence: 'Draupadi teaches us that we must always stand up for justice and our dignity, even when it\'s difficult. Her courage and determination show that speaking out against wrong is the right thing to do!',
              lesson: 'We must have the courage to stand up for justice and dignity, even in difficult situations.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Divine Protection',
        content: `When the situation became most dangerous, Draupadi's faith and righteousness protected her. Her courage in standing up for what was right, even in the face of great difficulty, showed her true strength.

Draupadi's story teaches us that:
- We should never accept injustice
- We must stand up for our dignity and rights
- Courage and determination can overcome difficult situations
- Speaking out against wrong is always the right thing to do

Her story is a powerful reminder that we all have the right to be treated with respect and dignity, and we should never be afraid to stand up for what is right.`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'What does Draupadi\'s story teach us?',
            options: [
              'Accept injustice quietly',
              'Stand up for justice and dignity',
              'Never speak up',
              'Give up when things are hard'
            ],
            correctAnswer: 1,
            explanation: 'Draupadi teaches us to stand up for justice and dignity, even in difficult situations.'
          }
        ]
      }
    ]
  },
  {
    id: 'sita-forest',
    title: 'Sita in the Forest',
    description: 'Follow Sita as she shows strength and wisdom during her time in the forest!',
    ageRange: '8-10',
    character: 'Sita',
    values: ['patience', 'courage', 'love'],
    illustration: characterImages['Sita'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Decision',
        content: `When Rama was exiled to the forest for 14 years, Sita had a choice. She could stay in the comfortable palace, or she could go with Rama to the difficult forest life.

Everyone tried to convince her to stay. "The forest is dangerous," they said. "You'll face many hardships."

But Sita was determined. "Where my husband goes, I go," she said. "Love means standing together through good times and difficult times."`,
        illustration: '🏰'
      },
      {
        id: 'ch2',
        title: 'Life in the Forest',
        content: `Life in the forest was indeed difficult. Sita had to adapt to a completely different way of living - simple food, basic shelter, and many challenges.

But Sita showed incredible strength and patience. She learned to find joy in simple things - the beauty of nature, the songs of birds, the peace of the forest.

She supported Rama and Lakshmana, showing that true love means being there for each other, no matter what challenges come.`,
        illustration: '🌿',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Sita\'s choice teach us about love?',
          options: [
            {
              id: 'opt1',
              text: 'Love means only being together in good times',
              consequence: 'Sita shows that true love means standing together through both good times and difficult times, supporting each other always.',
              lesson: 'True love means being there for each other in all situations.'
            },
            {
              id: 'opt2',
              text: 'True love means standing together through all challenges',
              consequence: 'Sita\'s choice to go with Rama shows that true love means supporting each other through all challenges. When we care about someone, we stand by them in good times and difficult times!',
              lesson: 'True love means supporting and standing with each other through all of life\'s challenges.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Strength and Wisdom',
        content: `Sita's time in the forest taught her many things. She learned to be strong, patient, and to find happiness in simple things. She showed that true strength comes from within - from love, patience, and the ability to adapt.

Her story teaches us that:
- True love means supporting each other through all challenges
- We can find joy and beauty even in difficult situations
- Patience and strength come from within
- Standing by those we love, even when it's hard, shows true character

Sita's courage and devotion make her one of the most respected figures in Hindu mythology!`,
        illustration: '💚',
        quiz: [
          {
            id: 'q1',
            question: 'What does Sita\'s story teach us?',
            options: [
              'Avoid difficult situations',
              'True love means supporting each other through all challenges',
              'Only think about yourself',
              'Give up when things are hard'
            ],
            correctAnswer: 1,
            explanation: 'Sita teaches that true love means supporting and standing with each other through all challenges.'
          }
        ]
      }
    ]
  },
  {
    id: 'lakshmana-loyalty',
    title: 'Lakshmana\'s Loyalty',
    description: 'Learn about Lakshmana\'s unwavering loyalty and devotion to his brother Rama!',
    ageRange: '8-10',
    character: 'Lakshmana',
    values: ['devotion', 'loyalty', 'brotherhood'],
    illustration: characterImages['Lakshmana'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Exile',
        content: `When Rama was asked to go into exile for 14 years, his brother Lakshmana immediately decided to go with him. Even though Lakshmana didn't have to go, he chose to leave his comfortable life to support his brother.

"Where you go, I go," Lakshmana told Rama. "We are brothers, and brothers stand together."

Lakshmana left behind his wife, his comforts, and everything he knew to be with Rama.`,
        illustration: '👬'
      },
      {
        id: 'ch2',
        title: 'Protecting and Serving',
        content: `In the forest, Lakshmana took on the role of protector. He built their shelters, found food, and kept watch at night so Rama and Sita could rest safely.

He never complained, even when things were difficult. His devotion to Rama was so strong that he was willing to do anything to help and protect his brother.

Lakshmana showed that true loyalty means putting others' needs before your own comfort.`,
        illustration: characterImages['Durga'],
        decisionPoint: {
          id: 'dp1',
          question: 'What does Lakshmana\'s loyalty teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should only help when it\'s easy',
              consequence: 'Lakshmana shows that true loyalty means helping and supporting others even when it\'s difficult or requires sacrifice.',
              lesson: 'True loyalty means being there for others even when it\'s hard.'
            },
            {
              id: 'opt2',
              text: 'True loyalty means supporting others even when it\'s difficult',
              consequence: 'Lakshmana\'s unwavering loyalty shows that when we care about someone, we support them through good times and bad. True loyalty means putting others\' needs before our own comfort!',
              lesson: 'True loyalty and devotion mean supporting others through all challenges, even when it requires sacrifice.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Bond of Brotherhood',
        content: `Lakshmana's loyalty and devotion to Rama became legendary. He showed that true brotherhood means:
- Standing by each other in difficult times
- Putting others' needs before your own
- Being willing to make sacrifices for those you love
- Never giving up on those who matter to you

Lakshmana's story teaches us that the strongest bonds are built on loyalty, devotion, and the willingness to support each other through everything. His example of brotherly love and devotion is remembered and respected to this day!`,
        illustration: '💙',
        quiz: [
          {
            id: 'q1',
            question: 'What does Lakshmana\'s story teach us about loyalty?',
            options: [
              'Only help when it\'s easy',
              'True loyalty means supporting others even when it\'s difficult',
              'Never help others',
              'Only think about yourself'
            ],
            correctAnswer: 1,
            explanation: 'Lakshmana teaches that true loyalty means supporting others even when it requires sacrifice and is difficult.'
          }
        ]
      }
    ]
  },
  {
    id: 'karthikeya-peacock',
    title: 'Karthikeya and the Peacock',
    description: 'Discover how Karthikeya, the warrior god, chose the peacock as his vehicle and became the leader of the gods\' army!',
    ageRange: '11-12',
    character: 'Karthikeya',
    values: ['courage', 'determination', 'compassion'],
    illustration: characterImages['Karthikeya'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Birth of a Warrior',
        content: `Karthikeya, also known as Murugan or Skanda, was born to help the gods fight against evil forces. He was the son of Lord Shiva and Goddess Parvati, and from birth, he was destined to be a great warrior.

The gods needed a strong leader for their army. They were facing powerful demons who were causing chaos and destruction. Karthikeya was chosen to lead the divine army because of his courage, wisdom, and strength.

But before he could lead, he needed to prove himself worthy.`,
        illustration: '⚔️'
      },
      {
        id: 'ch2',
        title: 'The Choice of Vehicle',
        content: `When it was time for Karthikeya to choose his vehicle (vahana), many powerful animals came forward. The mighty elephant, the swift horse, and the fierce tiger all wanted to serve him.

But then, a beautiful peacock came forward. The peacock wasn't the strongest or fastest, but it had something special - grace, beauty, and the ability to transform poison into beauty (peacocks can eat poisonous snakes).

Karthikeya looked at all the animals and made his choice.`,
        illustration: '🦚',
        decisionPoint: {
          id: 'dp1',
          question: 'What should Karthikeya consider when choosing his vehicle?',
          options: [
            {
              id: 'opt1',
              text: 'Only choose the strongest animal',
              consequence: 'While strength is important, Karthikeya teaches us that true leadership considers many qualities - not just physical strength, but also wisdom, grace, and the ability to transform challenges into opportunities.',
              lesson: 'True leadership considers many qualities, not just physical strength.'
            },
            {
              id: 'opt2',
              text: 'Choose based on wisdom, grace, and the ability to transform challenges',
              consequence: 'Karthikeya chose the peacock because it represents the ability to transform poison (challenges) into beauty. This teaches us that great leaders value wisdom, grace, and the ability to turn difficulties into opportunities!',
              lesson: 'Great leaders value wisdom, grace, and the ability to transform challenges into opportunities.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Leader of the Army',
        content: `Karthikeya chose the peacock as his vehicle, showing that true leadership isn't just about strength - it's about wisdom, grace, and the ability to transform challenges into opportunities.

With the peacock by his side, Karthikeya led the gods' army to victory against the demons. He became known as the commander of the divine forces, respected for both his courage in battle and his wisdom in leadership.

Karthikeya's story teaches us that:
- True leadership combines strength with wisdom
- We should value grace and beauty alongside power
- Challenges can be transformed into opportunities
- Great leaders inspire others through their example

Karthikeya, riding his peacock, remains a symbol of courage, leadership, and the ability to turn difficulties into victories!`,
        illustration: '🏆',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Karthikeya choose the peacock as his vehicle?',
            options: [
              'Because it was the strongest',
              'Because it represents wisdom, grace, and the ability to transform challenges',
              'Because it was the fastest',
              'Because he had no other choice'
            ],
            correctAnswer: 1,
            explanation: 'Karthikeya chose the peacock because it represents wisdom, grace, and the ability to transform poison (challenges) into beauty, teaching us about true leadership qualities.'
          }
        ]
      }
    ]
  },
  {
    id: 'narasimha-protection',
    title: 'Narasimha\'s Protection',
    description: 'Discover how Lord Narasimha protected Prahlada in a unique form!',
    ageRange: '8-10',
    character: 'Narasimha',
    values: ['protection', 'justice', 'faith'],
    illustration: characterImages['Narasimha'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Special Form',
        content: `When Prahlada needed protection from his father Hiranyakashipu, Lord Vishnu took a very special form - Narasimha, half-man and half-lion.

This form was unique because Hiranyakashipu had a special protection: he couldn't be killed by a man or an animal, during day or night, inside or outside. Narasimha appeared at twilight (neither day nor night), on a threshold (neither inside nor outside), and was neither fully man nor fully animal!

This shows that when we have true faith and stand for what is right, divine help will find a way to protect us.`,
        illustration: '🌅'
      },
      {
        id: 'ch2',
        title: 'The Divine Intervention',
        content: `Narasimha emerged from the pillar that Hiranyakashipu struck, protecting Prahlada who had shown unwavering faith and courage.

Narasimha's appearance shows that:
- True faith is always protected
- Justice will always prevail
- When we stand for what is right, help will come
- Divine protection comes in unexpected ways

Prahlada's devotion and courage were rewarded, and he was kept safe from harm.`,
        illustration: '✨',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Narasimha\'s protection teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should never stand up for what is right',
              consequence: 'Narasimha\'s story shows that when we stand up for what is right with faith and courage, we are protected.',
              lesson: 'Standing up for what is right, with faith, brings protection.'
            },
            {
              id: 'opt2',
              text: 'True faith and standing for justice brings protection',
              consequence: 'Narasimha\'s protection of Prahlada shows that when we have true faith and courage to stand for what is right, we are always protected. Justice and righteousness will always find a way!',
              lesson: 'True faith, courage, and standing for justice bring divine protection.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Message',
        content: `Narasimha's story teaches us that:
- When we have true faith and stand for what is right, we are protected
- Justice always finds a way to prevail
- Courage and devotion are powerful forces
- We should never give up on what we believe is right

Prahlada's unwavering faith and Narasimha's protection show that when we combine faith, courage, and righteousness, amazing things can happen. This story reminds us to always stand up for what is right, no matter how difficult it seems!`,
        illustration: characterImages['Durga'],
        quiz: [
          {
            id: 'q1',
            question: 'What does Narasimha\'s story teach us?',
            options: [
              'Never stand up for what is right',
              'True faith and standing for justice brings protection',
              'Give up when things are hard',
              'Only think about yourself'
            ],
            correctAnswer: 1,
            explanation: 'Narasimha\'s story teaches that true faith and standing for justice brings protection and that justice will always prevail.'
          }
        ]
      }
    ]
  },
  {
    id: 'buddha-compassion',
    title: 'Buddha\'s Compassion',
    description: 'Learn about the Buddha\'s teachings on compassion and kindness!',
    ageRange: '11-12',
    character: 'Buddha',
    values: ['compassion', 'wisdom', 'peace'],
    illustration: characterImages['Buddha'],
    estimatedMinutes: 12,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Prince Who Left',
        content: `Siddhartha was a prince who had everything - wealth, power, comfort. But he saw that many people in the world were suffering, and this made him sad.

He decided to leave his palace and search for a way to end suffering. He wanted to understand why people suffered and how to help them find peace and happiness.

After many years of searching and meditation, he became the Buddha - the enlightened one - and discovered the path to end suffering.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'The Path of Compassion',
        content: `The Buddha taught that the way to end suffering is through compassion - caring for others and wanting them to be happy and free from pain.

He taught that:
- We should treat all living beings with kindness
- We should help those who are suffering
- True happiness comes from helping others
- Compassion is the greatest strength

The Buddha showed that when we care about others' happiness as much as our own, we find true peace and joy.`,
        illustration: '💚',
        decisionPoint: {
          id: 'dp1',
          question: 'What is the Buddha\'s main teaching?',
          options: [
            {
              id: 'opt1',
              text: 'Only think about yourself',
              consequence: 'The Buddha teaches the opposite - that true happiness comes from caring for others and showing compassion.',
              lesson: 'True happiness comes from compassion and caring for others.'
            },
            {
              id: 'opt2',
              text: 'Compassion and kindness toward all living beings',
              consequence: 'The Buddha teaches that compassion - caring for others and wanting them to be happy - is the path to true peace and happiness. When we show kindness to all living beings, we find inner peace!',
              lesson: 'Compassion and kindness toward all living beings is the path to true happiness and peace.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Way Forward',
        content: `The Buddha's teachings about compassion are still followed by millions of people today. He showed that:
- True happiness comes from helping others
- Compassion makes the world a better place
- When we care for others, we care for ourselves too
- Kindness is the greatest strength

His story teaches us that no matter who we are or what we have, showing compassion and kindness to others is the way to find true peace and happiness. When we make others happy, we become happy too!`,
        illustration: '☮️',
        quiz: [
          {
            id: 'q1',
            question: 'What does the Buddha teach us?',
            options: [
              'Only care about yourself',
              'Compassion and kindness toward all living beings',
              'Ignore others\' suffering',
              'Be selfish'
            ],
            correctAnswer: 1,
            explanation: 'The Buddha teaches that compassion and kindness toward all living beings is the path to true happiness and peace.'
          }
        ]
      }
    ]
  },
  {
    id: 'kali-protection',
    title: 'Kali the Protector',
    description: 'Meet Kali, the fierce protector who destroys evil to protect the good!',
    ageRange: '11-12',
    character: 'Kali',
    values: ['protection', 'justice', 'courage'],
    illustration: characterImages['Kali'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Fierce Form',
        content: `Kali is often shown as a fierce goddess with dark skin, multiple arms, and a determined expression. She might look scary, but she represents the power that destroys evil to protect what is good.

When evil forces threatened the world, the gods needed someone powerful enough to stop them. From their combined energy, Kali emerged - fierce, determined, and ready to protect.

She represents the strength we need to stand up against wrong and protect what is right.`,
        illustration: '🛡️'
      },
      {
        id: 'ch2',
        title: 'Destroying Evil',
        content: `Kali fought against evil forces that were causing harm. Her fierce appearance and determination showed that sometimes we need to be strong and firm to protect what is good.

She teaches us that:
- We must stand up against wrong
- Protecting others sometimes requires strength and determination
- Destroying evil is necessary to protect good
- Being fierce in defense of what is right is important

Kali shows that true protection means being willing to stand strong against anything that threatens what is good.`,
        illustration: '⚡',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Kali teach us about protection?',
          options: [
            {
              id: 'opt1',
              text: 'Never stand up against wrong',
              consequence: 'Kali teaches the opposite - that we must be strong and stand up against evil to protect what is good.',
              lesson: 'We must have the courage to stand against evil to protect what is good.'
            },
            {
              id: 'opt2',
              text: 'We must be strong and stand up against evil to protect what is good',
              consequence: 'Kali teaches that protecting what is good sometimes requires us to be strong and determined. We must stand up against wrong, even when it\'s difficult, to protect others and what is right!',
              lesson: 'True protection means being strong and standing up against evil to protect what is good.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Protector',
        content: `Kali's story teaches us that:
- Sometimes we need to be strong to protect others
- Standing up against wrong is the right thing to do
- Protecting what is good requires courage and determination
- Being fierce in defense of justice is important

Kali reminds us that true protection means being willing to stand strong against anything that threatens what is good. Her fierce appearance represents the strength we all need to protect those we care about and stand up for what is right!`,
        illustration: '🌟',
        quiz: [
          {
            id: 'q1',
            question: 'What does Kali represent?',
            options: [
              'Being weak',
              'The strength to destroy evil and protect what is good',
              'Avoiding conflict',
              'Never standing up for others'
            ],
            correctAnswer: 1,
            explanation: 'Kali represents the strength and determination needed to destroy evil and protect what is good.'
          }
        ]
      }
    ]
  },
  {
    id: 'parvati-devotion',
    title: 'Parvati\'s Devotion',
    description: 'Learn about Parvati\'s unwavering devotion and love for Shiva!',
    ageRange: '8-10',
    character: 'Parvati',
    values: ['devotion', 'love', 'determination'],
    illustration: characterImages['Parvati'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Determined Princess',
        content: `Parvati was a beautiful princess who fell in love with Lord Shiva. But Shiva was deep in meditation and didn't notice her.

Parvati didn't give up. She decided to show her devotion by meditating herself, sitting in the same place where Shiva meditated, through heat and cold, through all seasons.

She was determined to show Shiva her true devotion and love.`,
        illustration: '🧘'
      },
      {
        id: 'ch2',
        title: 'The Test of Devotion',
        content: `Parvati's devotion was tested many times. She faced difficulties, but she never gave up. Her determination and love were so strong that nothing could stop her.

Finally, Shiva noticed her devotion. He was moved by her unwavering love and determination. He realized that true love and devotion are powerful forces that can overcome any obstacle.

Shiva and Parvati were united, showing that true devotion and determination can achieve anything.`,
        illustration: '💖',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Parvati\'s story teach us?',
          options: [
            {
              id: 'opt1',
              text: 'Give up when things are hard',
              consequence: 'Parvati shows the opposite - that determination and devotion can help us achieve our goals, even when it\'s difficult.',
              lesson: 'Determination and devotion help us achieve our goals.'
            },
            {
              id: 'opt2',
              text: 'True devotion and determination can achieve anything',
              consequence: 'Parvati\'s unwavering devotion and determination show that when we truly believe in something and work hard for it, we can achieve our goals. True love and devotion are powerful forces!',
              lesson: 'True devotion, determination, and love can help us achieve anything we set our minds to.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Power of Love',
        content: `Parvati's story teaches us that:
- True devotion and determination can achieve anything
- When we truly believe in something, we should never give up
- Love and devotion are powerful forces
- Persistence and faith can overcome any obstacle

Parvati's unwavering devotion to Shiva shows that when we truly care about something and are willing to work hard for it, we can achieve our goals. Her story is a beautiful example of how true love and determination can overcome any challenge!`,
        illustration: '💝',
        quiz: [
          {
            id: 'q1',
            question: 'What does Parvati\'s story teach us?',
            options: [
              'Give up easily',
              'True devotion and determination can achieve anything',
              'Never try hard',
              'Love doesn\'t matter'
            ],
            correctAnswer: 1,
            explanation: 'Parvati teaches that true devotion, determination, and love can help us achieve anything we set our minds to.'
          }
        ]
      }
    ]
  },
  {
    id: 'indra-rain',
    title: 'Indra and the Rain',
    description: 'Discover how Indra, the god of rain, brings life to the earth!',
    ageRange: '5-7',
    character: 'Indra',
    values: ['responsibility', 'care', 'generosity'],
    illustration: characterImages['Indra'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Dry Earth',
        content: `Long ago, the earth was very dry. The plants were wilting, the rivers were low, and all the animals were thirsty. Everyone was waiting for rain.

Indra is the god of rain and thunder. He controls the clouds and brings rain to the earth. When the earth needed water, all the living beings prayed to Indra.

"Please bring us rain, Lord Indra!" they said. "The earth needs water to live!"`,
        illustration: '🌵'
      },
      {
        id: 'ch2',
        title: 'The Gift of Rain',
        content: `Indra heard the prayers and saw how much the earth needed water. He gathered the clouds and brought gentle, life-giving rain.

As the rain fell, the earth came alive! Plants grew green, flowers bloomed, rivers filled with water, and all the animals had water to drink.

Everyone was happy and grateful. "Thank you, Lord Indra!" they said.`,
        illustration: '🌧️',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Indra\'s story teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should only think about ourselves',
              consequence: 'Indra shows that we should care for others and help when they need it, just like he brought rain to help all living beings.',
              lesson: 'We should care for others and help when they need it.'
            },
            {
              id: 'opt2',
              text: 'We should care for others and help when they need it',
              consequence: 'Indra\'s story teaches that when we have the ability to help others, we should use it to make the world better. Just like Indra brings rain to help all living beings, we should help those around us!',
              lesson: 'When we can help others, we should use our abilities to make the world better.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Caring for All',
        content: `Indra's story teaches us that:
- We should care for all living beings
- When we can help, we should
- Taking care of nature is important
- Sharing what we have makes the world better

Indra brings rain not just for some, but for everyone - plants, animals, and people. His story reminds us that we should care for all living things and help when we can. Just like rain helps everything grow, our kindness helps others grow and be happy!`,
        illustration: '🌱',
        quiz: [
          {
            id: 'q1',
            question: 'What does Indra\'s story teach us?',
            options: [
              'Only think about yourself',
              'Care for all living beings and help when we can',
              'Never help others',
              'Ignore nature'
            ],
            correctAnswer: 1,
            explanation: 'Indra teaches that we should care for all living beings and help when we can, just like he brings rain to help everyone.'
          }
        ]
      }
    ]
  },
  {
    id: 'krishna-flute',
    title: 'Krishna and the Magic Flute',
    description: 'Discover how Krishna\'s beautiful music brought joy to everyone!',
    ageRange: '5-7',
    character: 'Krishna',
    values: ['joy', 'music', 'love'],
    illustration: characterImages['Krishna'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Beautiful Music',
        content: `Krishna loved to play his flute. When he played, the most beautiful music filled the air. The sound was so enchanting that everyone who heard it felt happy and peaceful.

When Krishna played his flute in the forests of Vrindavan, even the animals would stop to listen. Birds would fly down, deer would come close, and cows would gather around.

The music was magical - it brought everyone together in joy and harmony.`,
        illustration: '🎶'
      },
      {
        id: 'ch2',
        title: 'The Power of Music',
        content: `Krishna's flute music had a special power. It could:
- Make people feel happy and peaceful
- Bring different creatures together
- Create harmony and joy
- Touch people's hearts

The gopis (cowherd girls) would leave everything to listen to Krishna's music. They knew that his music came from a place of pure love and joy.`,
        illustration: '💃',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Krishna\'s music teach us?',
          options: [
            {
              id: 'opt1',
              text: 'Music doesn\'t matter',
              consequence: 'Krishna\'s story shows that music and art can bring people together and create joy and harmony.',
              lesson: 'Music and art can bring joy and bring people together.'
            },
            {
              id: 'opt2',
              text: 'Music and art can bring joy and bring people together',
              consequence: 'Krishna\'s beautiful music shows that art and music have the power to bring people together, create joy, and touch people\'s hearts. When we share our talents with love, we can make the world more beautiful!',
              lesson: 'Music, art, and sharing our talents with love can bring joy and harmony to the world.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Sharing Joy',
        content: `Krishna's story teaches us that:
- Music and art can bring people together
- Sharing our talents brings joy to others
- Beauty and harmony make the world better
- When we do things with love, they become magical

Krishna didn't play his flute to show off - he played it to share joy and love with everyone. His story reminds us that when we share our talents and do things with love, we can bring happiness to others and make the world a more beautiful place!`,
        illustration: '🎼',
        quiz: [
          {
            id: 'q1',
            question: 'What does Krishna\'s music teach us?',
            options: [
              'Music doesn\'t matter',
              'Music and art can bring joy and bring people together',
              'Never share your talents',
              'Only think about yourself'
            ],
            correctAnswer: 1,
            explanation: 'Krishna\'s music teaches that art and music can bring joy, harmony, and bring people together.'
          }
        ]
      }
    ]
  },
  {
    id: 'ganesha-obstacle',
    title: 'Ganesha the Remover of Obstacles',
    description: 'Learn why Ganesha is worshipped first and how he helps remove obstacles!',
    ageRange: '5-7',
    character: 'Ganesha',
    values: ['wisdom', 'helpfulness', 'patience'],
    illustration: characterImages['Ganesha'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'Why Ganesha First?',
        content: `Have you noticed that in Hindu prayers and ceremonies, Ganesha is always worshipped first? There's a special reason for this!

Ganesha is known as Vighnaharta - the remover of obstacles. People pray to him first because they believe he will remove any obstacles or problems that might come in their way.

It's like asking for help before starting something important!`,
        illustration: '🙏'
      },
      {
        id: 'ch2',
        title: 'The Helper',
        content: `Ganesha helps people in many ways:
- He removes obstacles from their path
- He gives wisdom to make good decisions
- He brings success to new beginnings
- He helps solve problems

When people start something new - like a new school year, a new project, or an important task - they pray to Ganesha first, asking him to help things go smoothly.`,
        illustration: '✨',
        decisionPoint: {
          id: 'dp1',
          question: 'Why do people pray to Ganesha first?',
          options: [
            {
              id: 'opt1',
              text: 'Because they have to',
              consequence: 'People pray to Ganesha first because they believe he helps remove obstacles and makes things go smoothly, not because they have to.',
              lesson: 'We pray to Ganesha because he helps us, not because we have to.'
            },
            {
              id: 'opt2',
              text: 'Because he helps remove obstacles and brings success',
              consequence: 'People pray to Ganesha first because they believe he removes obstacles and helps new beginnings go smoothly. It\'s like asking for help and guidance before starting something important!',
              lesson: 'We pray to Ganesha first because he helps remove obstacles and brings success to new beginnings.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Starting Right',
        content: `Ganesha's story teaches us that:
- It's good to ask for help when starting something new
- Removing obstacles helps us succeed
- Wisdom and guidance are important
- Starting things the right way matters

When we pray to Ganesha or simply think about doing our best and asking for help when needed, we're following an important lesson: it's good to prepare and ask for guidance before starting something important. This helps us succeed and overcome challenges!`,
        illustration: '🌟',
        quiz: [
          {
            id: 'q1',
            question: 'Why is Ganesha worshipped first?',
            options: [
              'Because people have to',
              'Because he helps remove obstacles and brings success',
              'Because he\'s the strongest',
              'For no reason'
            ],
            correctAnswer: 1,
            explanation: 'Ganesha is worshipped first because he helps remove obstacles and brings success to new beginnings.'
          }
        ]
      }
    ]
  },
  {
    id: 'hanuman-strength',
    title: 'Hanuman\'s Childhood Strength',
    description: 'Discover how young Hanuman showed incredible strength and curiosity!',
    ageRange: '5-7',
    character: 'Hanuman',
    values: ['curiosity', 'strength', 'playfulness'],
    illustration: characterImages['Hanuman'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Curious Baby',
        content: `When Hanuman was a baby, he was very curious and playful. One morning, he saw the sun rising in the sky. It looked like a big, bright orange fruit to him!

"Yummy fruit!" thought baby Hanuman, and he decided to fly up and grab it.

His mother tried to stop him, but Hanuman was already flying toward the sun!`,
        illustration: '☀️'
      },
      {
        id: 'ch2',
        title: 'The Mighty Leap',
        content: `Hanuman flew higher and higher toward the sun. The gods saw this and were worried. They asked Indra, the king of gods, to stop him.

Indra threw his thunderbolt at Hanuman, which hit him and made him fall back to earth. But Hanuman was so strong that he wasn't badly hurt.

This showed everyone that even as a baby, Hanuman had incredible strength and courage!`,
        illustration: '💫',
        decisionPoint: {
          id: 'dp1',
          question: 'What does young Hanuman\'s story teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should never be curious',
              consequence: 'Hanuman\'s curiosity is actually a good thing - it shows he was brave and wanted to explore. But we should be curious in safe ways!',
              lesson: 'Curiosity is good, but we should explore safely.'
            },
            {
              id: 'opt2',
              text: 'Curiosity and courage are good, but we should be careful',
              consequence: 'Hanuman\'s story shows that curiosity and courage are wonderful qualities! But it also teaches us to be careful and listen to our parents when they try to keep us safe. We can be curious and brave while staying safe!',
              lesson: 'Curiosity and courage are good, but we should always be careful and listen to those who keep us safe.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Growing Strong',
        content: `Hanuman's story teaches us that:
- Curiosity and courage are wonderful qualities
- We should always be careful and listen to our parents
- Strength comes in many forms - physical and inner strength
- Being playful and curious helps us learn

Even though Hanuman got into trouble, his curiosity and courage were part of what made him great later. The important lesson is to be curious and brave, but also to be careful and listen to those who care about us and want to keep us safe!`,
        illustration: '🌱',
        quiz: [
          {
            id: 'q1',
            question: 'What does young Hanuman\'s story teach us?',
            options: [
              'Never be curious',
              'Curiosity and courage are good, but we should be careful',
              'Never listen to parents',
              'Only be afraid'
            ],
            correctAnswer: 1,
            explanation: 'Hanuman\'s story teaches that curiosity and courage are good, but we should always be careful and listen to those who keep us safe.'
          }
        ]
      }
    ]
  },
  // === NEW STORIES BATCH 1 ===
  {
    id: 'krishna-govardhan',
    title: 'Krishna Lifts Govardhan',
    description: 'See how young Krishna protected his village by lifting an entire mountain!',
    ageRange: '5-7',
    character: 'Krishna',
    values: ['courage', 'protection', 'faith'],
    illustration: characterImages['Krishna'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Storm',
        content: `The villagers of Vrindavan always worshipped Indra, the god of rain. But young Krishna suggested they worship the Govardhan mountain instead, as it gave them grass for their cows and water for their fields.

Indra became angry! He sent terrible storms with thunder, lightning, and heavy rain to punish the villagers.

The people were scared. "What will we do?" they cried.`,
        illustration: '⛈️'
      },
      {
        id: 'ch2',
        title: 'The Mighty Lift',
        content: `Krishna smiled and told everyone not to worry. He walked to Govardhan mountain and lifted it with just his little finger!

"Come everyone, take shelter under the mountain!" he called.

All the villagers, along with their cows and animals, gathered under the mountain. They were safe and dry while the storm raged outside.`,
        illustration: '⛰️',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Krishna lifting the mountain teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should show off our strength',
              consequence: 'Krishna didn\'t lift the mountain to show off - he did it to protect others.',
              lesson: 'True strength is used to help and protect others, not to show off.'
            },
            {
              id: 'opt2',
              text: 'True strength is used to protect others',
              consequence: 'Krishna used his incredible strength to protect his village and loved ones. This teaches us that real power is meant for helping others!',
              lesson: 'True strength should be used to protect and help those in need.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Peace Returns',
        content: `For seven days and nights, Krishna held up the mountain. Finally, Indra realized his mistake and stopped the storm. He came down and apologized to Krishna.

Krishna forgave Indra and gently put the mountain back down. The villagers celebrated their little hero!

This story teaches us that true strength is meant to protect others, and that forgiveness is more powerful than anger.`,
        illustration: '🌈',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Krishna lift the mountain?',
            options: [
              'To show how strong he was',
              'To protect the villagers from the storm',
              'Because he was bored',
              'To make Indra happy'
            ],
            correctAnswer: 1,
            explanation: 'Krishna lifted the mountain to protect his village from the terrible storm.'
          }
        ]
      }
    ]
  },
  {
    id: 'ganesha-race',
    title: 'Ganesha Wins the Race',
    description: 'Learn how clever Ganesha won a race around the world using wisdom instead of speed!',
    ageRange: '5-7',
    character: 'Ganesha',
    values: ['wisdom', 'love', 'cleverness'],
    illustration: characterImages['Ganesha'],
    estimatedMinutes: 7,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Challenge',
        content: `One day, Lord Shiva and Goddess Parvati had a special fruit. Both their sons, Ganesha and Karthikeya, wanted it.

"Let's have a contest," said Shiva. "Whoever goes around the world three times first will get the fruit!"

Karthikeya immediately jumped on his peacock and flew off at great speed.`,
        illustration: '🍎'
      },
      {
        id: 'ch2',
        title: 'The Clever Solution',
        content: `Ganesha looked at his small mouse vehicle. He knew he couldn't race as fast as Karthikeya's peacock. But Ganesha was very wise.

He thought for a moment, then smiled. He walked slowly around his parents three times!

"What are you doing?" asked Parvati, puzzled.`,
        illustration: '🐁',
        decisionPoint: {
          id: 'dp1',
          question: 'Why did Ganesha walk around his parents?',
          options: [
            {
              id: 'opt1',
              text: 'He was lazy',
              consequence: 'Ganesha wasn\'t lazy - he was being very clever and thoughtful!',
              lesson: 'Sometimes what looks easy is actually very wise.'
            },
            {
              id: 'opt2',
              text: 'His parents ARE his world',
              consequence: 'Ganesha knew that for him, his parents were the whole world. Going around them was the same as going around the world! This shows wisdom and love.',
              lesson: 'Our parents and family are our whole world. Loving them is the greatest wisdom.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Wisdom Wins',
        content: `Ganesha explained, "For me, my parents are my entire world. Going around you three times is the same as going around the world!"

Shiva and Parvati were so impressed by Ganesha's wisdom and love that they gave him the fruit.

When Karthikeya returned after his long journey, he learned an important lesson: wisdom and love are more powerful than speed.`,
        illustration: '🏆',
        quiz: [
          {
            id: 'q1',
            question: 'What did Ganesha\'s clever solution teach us?',
            options: [
              'Speed is everything',
              'Wisdom and love are more powerful than speed',
              'Never compete',
              'Always take shortcuts'
            ],
            correctAnswer: 1,
            explanation: 'Ganesha showed that wisdom and love for parents are more valuable than physical speed.'
          }
        ]
      }
    ]
  },
  {
    id: 'rama-squirrel',
    title: 'Rama and the Little Squirrel',
    description: 'Discover how every small effort matters through the story of a helpful squirrel!',
    ageRange: '5-7',
    character: 'Rama',
    values: ['kindness', 'respect', 'helpfulness'],
    illustration: characterImages['Rama'],
    estimatedMinutes: 7,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'Building the Bridge',
        content: `When Rama needed to cross the ocean to rescue Sita, the monkeys and bears started building a great bridge. They carried huge rocks and boulders to make the path across the sea.

A tiny squirrel watched them work. She wanted to help too, but she was so small!

"I may be little, but I can try," she thought bravely.`,
        illustration: '🌊'
      },
      {
        id: 'ch2',
        title: 'The Squirrel\'s Effort',
        content: `The little squirrel ran to the beach and rolled in the sand. Then she ran to the bridge and shook off the sand between the big rocks.

Back and forth she went, adding tiny grains of sand to help fill the gaps.

Some monkeys laughed at her. "What can such a tiny creature do?" they said.`,
        illustration: '🐿️',
        decisionPoint: {
          id: 'dp1',
          question: 'Should the squirrel continue despite being laughed at?',
          options: [
            {
              id: 'opt1',
              text: 'No, she should stop',
              consequence: 'If she stopped, she would never know how much her small efforts could help.',
              lesson: 'We shouldn\'t give up just because others doubt us.'
            },
            {
              id: 'opt2',
              text: 'Yes, every effort counts',
              consequence: 'The squirrel kept going because she knew that even small efforts matter. Her sand helped hold the big rocks together!',
              lesson: 'Every effort, no matter how small, contributes to something bigger.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Rama\'s Blessing',
        content: `Rama saw the little squirrel working so hard. He picked her up gently and stroked her back with his three fingers.

"Thank you, little one," he said. "Your effort is just as important as anyone else's."

From that day, squirrels have three stripes on their backs - the loving marks of Rama's fingers. This story teaches us that every small effort matters!`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'What did Rama teach us through this story?',
            options: [
              'Only big efforts matter',
              'Small creatures are useless',
              'Every effort, no matter how small, is important',
              'We should never try if we\'re small'
            ],
            correctAnswer: 2,
            explanation: 'Rama showed that every effort counts, no matter how small it may seem.'
          }
        ]
      }
    ]
  },
  {
    id: 'shiva-ganga',
    title: 'Shiva and the River Ganga',
    description: 'Learn how Shiva caught the mighty river Ganga in his hair to save the Earth!',
    ageRange: '8-10',
    character: 'Shiva',
    values: ['sacrifice', 'protection', 'wisdom'],
    illustration: characterImages['Shiva'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The King\'s Prayer',
        content: `Long ago, King Bhagiratha wanted to bring the sacred river Ganga from heaven to earth. His ancestors needed the holy water to find peace.

After years of prayer, Ganga agreed to come down. But there was a problem - Ganga was so powerful that if she fell directly to earth, she would destroy everything!

"Who can stop my mighty fall?" Ganga asked proudly.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'Shiva\'s Solution',
        content: `Bhagiratha prayed to Lord Shiva for help. Shiva agreed to catch Ganga in his matted hair to break her fall.

When Ganga fell from heaven with tremendous force, Shiva stood calmly. He caught her in his long, tangled hair, where she wandered for years, her power gently reduced.

Finally, Shiva released Ganga as a gentle river that could flow on earth without destruction.`,
        illustration: '🌊',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Shiva catching Ganga teach us?',
          options: [
            {
              id: 'opt1',
              text: 'Strong people should show off their power',
              consequence: 'Shiva didn\'t catch Ganga to show off - he did it to protect the earth.',
              lesson: 'True power is used for protection, not for showing off.'
            },
            {
              id: 'opt2',
              text: 'We should use our strength to protect others',
              consequence: 'Shiva used his immense power to save the earth from destruction. True strength means protecting those who need help!',
              lesson: 'Real strength is shown through protecting others and using power wisely.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Sacred River',
        content: `Thanks to Shiva, the river Ganga now flows gently across India, giving life to millions of people, animals, and plants.

Bhagiratha's ancestors found peace, and the river became one of the holiest in the world.

This story teaches us that true power is about protection and wisdom. Shiva could have let Ganga fall and destroy everything, but instead he chose to help and protect the world.`,
        illustration: '🙏',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Shiva catch Ganga in his hair?',
            options: [
              'To show he was stronger than Ganga',
              'To protect the earth from destruction',
              'Because he was bored',
              'Because Ganga asked him to'
            ],
            correctAnswer: 1,
            explanation: 'Shiva caught Ganga to protect the earth from being destroyed by her powerful fall.'
          }
        ]
      }
    ]
  },
  {
    id: 'hanuman-sanjeevani',
    title: 'Hanuman and the Mountain of Herbs',
    description: 'Follow Hanuman on his urgent mission to save Lakshmana\'s life!',
    ageRange: '8-10',
    character: 'Hanuman',
    values: ['devotion', 'determination', 'love'],
    illustration: characterImages['Hanuman'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Wounded Brother',
        content: `During the great battle in Lanka, Lakshmana was struck by a powerful weapon. He fell unconscious, and nothing could wake him.

The healer said, "Only the Sanjeevani herb from the Himalayan mountains can save him. But it must be brought before sunrise, or Lakshmana will die."

Everyone looked worried. The Himalayas were so far away!`,
        illustration: '💔'
      },
      {
        id: 'ch2',
        title: 'The Race Against Time',
        content: `Hanuman immediately leaped into the sky. He flew faster than he ever had before, crossing oceans and mountains in moments.

When he reached the Himalayas, he couldn\'t find the Sanjeevani herb among thousands of plants. Time was running out!

Hanuman made a bold decision - he lifted the entire mountain!`,
        illustration: '🏔️',
        decisionPoint: {
          id: 'dp1',
          question: 'What gave Hanuman such incredible determination?',
          options: [
            {
              id: 'opt1',
              text: 'He wanted to impress everyone',
              consequence: 'Hanuman wasn\'t thinking about impressing anyone - his only thought was saving Lakshmana.',
              lesson: 'True determination comes from love, not from wanting attention.'
            },
            {
              id: 'opt2',
              text: 'His love and devotion to Rama and Lakshmana',
              consequence: 'Hanuman\'s incredible feat was powered by pure love and devotion. When we truly care about someone, we can do amazing things!',
              lesson: 'Love and devotion give us the strength to achieve the impossible.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Hero Returns',
        content: `Hanuman flew back carrying the entire mountain, arriving just before sunrise. The healers found the Sanjeevani herb and saved Lakshmana!

Everyone celebrated Hanuman's incredible feat. But Hanuman was simply happy that Lakshmana was alive.

This story shows us that when we truly love someone, there's nothing we won't do to help them. Hanuman's devotion made the impossible possible.`,
        illustration: '🌅',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Hanuman bring the entire mountain?',
            options: [
              'He wanted to show off',
              'He couldn\'t find the specific herb and didn\'t want to waste time',
              'He was told to',
              'It was easier than looking'
            ],
            correctAnswer: 1,
            explanation: 'Hanuman brought the whole mountain because he couldn\'t identify the herb and didn\'t want to waste precious time while Lakshmana\'s life was in danger.'
          }
        ]
      }
    ]
  },
  {
    id: 'vishnu-vamana',
    title: 'Vishnu as the Little Brahmin',
    description: 'See how Lord Vishnu taught a proud king an important lesson about humility!',
    ageRange: '8-10',
    character: 'Vishnu',
    values: ['humility', 'wisdom', 'dharma'],
    illustration: characterImages['Vishnu'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Powerful King',
        content: `King Bali was a demon king, but he was very generous and powerful. He had conquered the three worlds - earth, heaven, and the underworld.

Though Bali was good in many ways, his pride grew and grew. The gods worried that he had become too powerful.

Lord Vishnu decided to teach Bali an important lesson about humility.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'The Small Request',
        content: `Vishnu took the form of Vamana, a small Brahmin boy. He went to King Bali during a ceremony where Bali was granting wishes.

"Great King," said the little Brahmin, "I ask only for three steps of land."

Bali laughed. "Just three steps? Ask for more!"

But Vamana only wanted three steps. Bali agreed.`,
        illustration: '🚶',
        decisionPoint: {
          id: 'dp1',
          question: 'Why did Vamana ask for something so small?',
          options: [
            {
              id: 'opt1',
              text: 'He was afraid to ask for more',
              consequence: 'Vamana wasn\'t afraid - he had a much bigger plan to teach Bali about humility.',
              lesson: 'Sometimes small requests hold great meaning.'
            },
            {
              id: 'opt2',
              text: 'He had a wise plan to teach Bali about humility',
              consequence: 'Vamana knew that even a "small" request could teach a great lesson. His wisdom was about to show Bali something important about the universe!',
              lesson: 'Wisdom often comes in unexpected forms and sizes.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Great Lesson',
        content: `Suddenly, Vamana grew to an enormous size! With his first step, he covered all of earth. With his second step, he covered all of heaven.

"Where shall I place my third step?" asked Vishnu.

Bali realized his pride had been foolish. Humbly, he offered his own head for the third step. Vishnu blessed Bali for his humility and made him the king of the underworld.

This story teaches us that true greatness comes with humility, not pride.`,
        illustration: '🌍',
        quiz: [
          {
            id: 'q1',
            question: 'What lesson did Bali learn?',
            options: [
              'Never give anything to anyone',
              'True greatness comes with humility, not pride',
              'Never trust strangers',
              'Always ask for more'
            ],
            correctAnswer: 1,
            explanation: 'Bali learned that true greatness comes with humility, and that pride can blind us to what\'s really important.'
          }
        ]
      }
    ]
  },
  {
    id: 'durga-nine-nights',
    title: 'The Nine Nights of Durga',
    description: 'Experience the powerful story of Durga\'s nine-day battle against evil!',
    ageRange: '11-12',
    character: 'Durga',
    values: ['courage', 'perseverance', 'justice'],
    illustration: characterImages['Durga'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Unstoppable Demon',
        content: `The buffalo demon Mahishasura had grown so powerful that no god could defeat him. He had a special boon - he could only be killed by a woman, and he believed no woman was strong enough.

The gods combined their powers and created Durga - a goddess with ten arms, each holding a divine weapon. She rode on a fierce lion.

"I will end this evil," Durga declared, and the battle began.`,
        illustration: '⚔️'
      },
      {
        id: 'ch2',
        title: 'The Long Battle',
        content: `For nine days and nights, Durga fought Mahishasura. The demon kept changing forms - becoming a lion, an elephant, a buffalo - to try to defeat her.

But Durga never gave up. Each day she grew stronger, and each night she prepared for the next battle.

On the ninth night, Mahishasura made his final stand as a mighty buffalo.`,
        illustration: '🌙',
        decisionPoint: {
          id: 'dp1',
          question: 'What kept Durga fighting for nine days?',
          options: [
            {
              id: 'opt1',
              text: 'She enjoyed fighting',
              consequence: 'Durga didn\'t enjoy the battle - she was determined to protect the world from evil.',
              lesson: 'True warriors fight for justice, not for the love of fighting.'
            },
            {
              id: 'opt2',
              text: 'Her determination to protect justice and the innocent',
              consequence: 'Durga\'s perseverance came from her commitment to protecting the innocent and upholding justice. When we fight for what\'s right, we find the strength to continue!',
              lesson: 'Perseverance for a just cause gives us unending strength.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Victory of Good',
        content: `On the tenth day, called Vijayadashami (Victory Tenth), Durga finally defeated Mahishasura. Her trident struck true, and evil was vanquished.

The world celebrated! This is why we celebrate Navaratri - nine nights of honoring Durga's courage and strength.

Durga's story teaches us that:
- Good always triumphs over evil
- Perseverance leads to victory
- True strength is used for protection and justice`,
        illustration: '🏆',
        quiz: [
          {
            id: 'q1',
            question: 'Why do we celebrate Navaratri?',
            options: [
              'To celebrate Durga\'s nine-day battle and victory over evil',
              'Because it\'s tradition',
              'To take a holiday',
              'To eat sweets'
            ],
            correctAnswer: 0,
            explanation: 'Navaratri celebrates Durga\'s nine-day battle and her ultimate victory over the demon Mahishasura, symbolizing good over evil.'
          }
        ]
      }
    ]
  },
  {
    id: 'lakshmi-owl',
    title: 'Lakshmi and the Wise Owl',
    description: 'Learn why an owl accompanies the goddess of wealth and what true wisdom means!',
    ageRange: '8-10',
    character: 'Lakshmi',
    values: ['wisdom', 'patience', 'discernment'],
    illustration: characterImages['Lakshmi'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Owl\'s Gift',
        content: `Lakshmi, the goddess of wealth and prosperity, has an unusual companion - an owl. Many wondered why such a beautiful goddess would choose an owl.

The owl can see in darkness when others cannot. It represents the ability to see what others miss and to make wise decisions even when things are unclear.

This teaches us something important about wealth and prosperity.`,
        illustration: '🦉'
      },
      {
        id: 'ch2',
        title: 'The Hidden Meaning',
        content: `Just as the owl sees in darkness, we must learn to see the true value of things. Real wealth isn\'t just about money - it\'s about wisdom, family, health, and kindness.

The owl also reminds us to be patient. It waits quietly, watching and learning, before acting. This patience leads to wise decisions.

Lakshmi chose the owl to teach us these lessons.`,
        illustration: '💡',
        decisionPoint: {
          id: 'dp1',
          question: 'What does the owl teach us about wealth?',
          options: [
            {
              id: 'opt1',
              text: 'Money is everything',
              consequence: 'The owl teaches us the opposite - that true wealth includes wisdom, patience, and seeing what really matters.',
              lesson: 'True wealth is about more than money.'
            },
            {
              id: 'opt2',
              text: 'We need wisdom to understand true prosperity',
              consequence: 'The owl reminds us that real prosperity comes from wisdom, patience, and the ability to see what truly matters in life!',
              lesson: 'Wisdom helps us understand and appreciate true prosperity.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Complete Picture',
        content: `Lakshmi and her owl teach us that:
- True wealth includes wisdom, not just money
- Patience leads to better decisions
- We should look beyond the surface to find real value
- Prosperity comes to those who are wise and kind

Next time you think about being rich, remember the owl - true wealth is about seeing clearly, being patient, and valuing what really matters!`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'Why does Lakshmi have an owl as her companion?',
            options: [
              'Because owls are beautiful',
              'The owl represents wisdom and seeing true value',
              'She found it in the forest',
              'Because owls like gold'
            ],
            correctAnswer: 1,
            explanation: 'The owl represents wisdom, patience, and the ability to see true value - qualities needed to understand real prosperity.'
          }
        ]
      }
    ]
  },
  {
    id: 'saraswati-swan',
    title: 'Saraswati\'s Swan of Wisdom',
    description: 'Discover why Saraswati rides a white swan and what it teaches about knowledge!',
    ageRange: '8-10',
    character: 'Saraswati',
    values: ['wisdom', 'discernment', 'purity'],
    illustration: characterImages['Saraswati'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Special Swan',
        content: `Saraswati, the goddess of knowledge and learning, rides a beautiful white swan. But this isn't an ordinary swan - it has a magical ability.

This swan can separate milk from water when they're mixed together! It drinks only the pure milk and leaves the water behind.

What could this special ability mean?`,
        illustration: '🦢'
      },
      {
        id: 'ch2',
        title: 'The Power of Discernment',
        content: `Just like the swan separates milk from water, we must learn to separate good knowledge from bad, truth from lies, and helpful ideas from harmful ones.

This is called discernment - the wisdom to tell the difference between what's valuable and what's not.

Saraswati chose the swan to remind students everywhere of this important skill.`,
        illustration: '📚',
        decisionPoint: {
          id: 'dp1',
          question: 'What does the swan\'s ability teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should believe everything we hear',
              consequence: 'The swan teaches us the opposite - we should carefully choose what to accept as true and valuable.',
              lesson: 'Not everything we hear or learn is equally valuable.'
            },
            {
              id: 'opt2',
              text: 'We should learn to separate good knowledge from bad',
              consequence: 'Like the swan separates milk from water, we should develop the wisdom to choose good knowledge over bad and truth over lies!',
              lesson: 'True learning includes the wisdom to discern what is valuable and true.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Lesson',
        content: `Saraswati and her swan teach us that:
- Learning includes knowing what to learn
- Not all information is equally valuable
- We should seek pure, true knowledge
- Wisdom helps us make good choices about what to believe

When you study or learn something new, be like the swan - take in what is good and true, and leave behind what isn't!`,
        illustration: '🎓',
        quiz: [
          {
            id: 'q1',
            question: 'What ability does Saraswati\'s swan have?',
            options: [
              'It can fly very high',
              'It can separate milk from water',
              'It can speak',
              'It can predict the future'
            ],
            correctAnswer: 1,
            explanation: 'The swan can separate milk from water, symbolizing the ability to discern good knowledge from bad.'
          }
        ]
      }
    ]
  },
  {
    id: 'arjuna-guru-dakshina',
    title: 'Arjuna\'s Gift to His Teacher',
    description: 'Learn about gratitude and devotion through Arjuna\'s relationship with his guru!',
    ageRange: '11-12',
    character: 'Arjuna',
    values: ['gratitude', 'devotion', 'respect'],
    illustration: characterImages['Arjuna'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Master Teacher',
        content: `Dronacharya was the greatest weapons teacher in the land. He taught the Pandavas and Kauravas everything about archery and warfare.

Arjuna was his most devoted student. He practiced harder than anyone else, often staying up late to perfect his skills.

Drona saw Arjuna's dedication and taught him special techniques that he shared with no one else.`,
        illustration: '🏹'
      },
      {
        id: 'ch2',
        title: 'Guru Dakshina',
        content: `In ancient India, students gave their teachers a gift called guru dakshina at the end of their training. It was a way of showing gratitude.

When the time came, Drona asked his students for an unusual guru dakshina. He wanted them to capture King Drupada, who had once insulted him.

The Kauravas tried first but failed. Then Arjuna stepped forward.`,
        illustration: '🎁',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Arjuna\'s willingness to fulfill Drona\'s wish show?',
          options: [
            {
              id: 'opt1',
              text: 'He wanted to show off',
              consequence: 'Arjuna wasn\'t showing off - he genuinely wanted to honor his teacher who had given him so much.',
              lesson: 'True gratitude comes from the heart.'
            },
            {
              id: 'opt2',
              text: 'His deep gratitude and respect for his teacher',
              consequence: 'Arjuna\'s willingness to take on a difficult task showed his deep respect and gratitude for everything Drona had taught him. True students honor their teachers!',
              lesson: 'We should show gratitude to those who teach and guide us.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Grateful Student',
        content: `Using all the skills Drona had taught him, Arjuna successfully captured King Drupada and brought him to his teacher.

Drona was pleased, not because of revenge, but because his student had shown such devotion and skill.

This story teaches us:
- We should be grateful to our teachers
- Respecting those who guide us is important
- The best way to honor a teacher is to use what they taught us well`,
        illustration: '🙏',
        quiz: [
          {
            id: 'q1',
            question: 'What is guru dakshina?',
            options: [
              'A type of weapon',
              'A gift given to teachers to show gratitude',
              'A type of dance',
              'A special food'
            ],
            correctAnswer: 1,
            explanation: 'Guru dakshina is a gift or offering given to teachers as a way of showing gratitude for their teaching.'
          }
        ]
      }
    ]
  },
  {
    id: 'sita-agni-pariksha',
    title: 'Sita\'s Test of Truth',
    description: 'Learn about Sita\'s unwavering truth and purity through her great test!',
    ageRange: '11-12',
    character: 'Sita',
    values: ['truth', 'purity', 'courage'],
    illustration: characterImages['Sita'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Question',
        content: `After Rama rescued Sita from Ravana, some people questioned whether Sita was still pure after living in Ravana's kingdom.

Sita was hurt by these doubts. She had never wavered in her devotion to Rama, not even for a moment. She had rejected all of Ravana's offers and threats.

But how could she prove her purity to everyone?`,
        illustration: '💭'
      },
      {
        id: 'ch2',
        title: 'The Fire Test',
        content: `Sita decided to prove her truth through the ultimate test - she would walk into fire. If she was pure and truthful, the fire would not harm her.

With complete faith in her own truth, Sita walked into the flames. Everyone watched in silence.

The fire god Agni himself appeared, carrying Sita in his arms. She was completely unharmed!`,
        illustration: '🔥',
        decisionPoint: {
          id: 'dp1',
          question: 'What gave Sita the courage to face the fire?',
          options: [
            {
              id: 'opt1',
              text: 'She didn\'t have a choice',
              consequence: 'Sita chose to face the fire because she knew her own truth. Her courage came from her absolute faith in her purity.',
              lesson: 'When we know we are truthful, we can face any test.'
            },
            {
              id: 'opt2',
              text: 'Her complete faith in her own truth and purity',
              consequence: 'Sita\'s courage came from knowing she had always been truthful and pure. When we live with integrity, we can face any challenge with confidence!',
              lesson: 'Living truthfully gives us the courage to face any test or accusation.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Truth Triumphs',
        content: `Agni declared to everyone: "Sita is the purest of all. Not even my flames could touch her because her truth protected her."

Sita's story teaches us that:
- Truth is the greatest protection
- Living with integrity gives us strength
- We should never compromise our principles
- True purity comes from our actions and thoughts

Sita's unwavering truthfulness made her one of the most respected figures in all of mythology.`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'Why was Sita unharmed by the fire?',
            options: [
              'She had magical powers',
              'Her absolute truth and purity protected her',
              'The fire wasn\'t real',
              'Someone saved her'
            ],
            correctAnswer: 1,
            explanation: 'Sita\'s complete truth and purity protected her from the flames, proving her innocence.'
          }
        ]
      }
    ]
  },
  {
    id: 'krishna-sudama',
    title: 'Krishna and His Friend Sudama',
    description: 'Discover the beautiful story of true friendship that lasts forever!',
    ageRange: '8-10',
    character: 'Krishna',
    values: ['friendship', 'humility', 'generosity'],
    illustration: characterImages['Krishna'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Poor Friend',
        content: `Krishna had become a great king, ruling from his magnificent palace in Dwaraka. But he never forgot his childhood friends.

Sudama was Krishna's best friend from their school days. While Krishna had become rich and powerful, Sudama remained very poor. His family often didn't have enough to eat.

Sudama's wife suggested he visit Krishna for help, but Sudama was embarrassed to ask his friend for anything.`,
        illustration: '👬'
      },
      {
        id: 'ch2',
        title: 'The Humble Gift',
        content: `Finally, Sudama decided to visit Krishna. He had nothing to bring as a gift except a small pouch of beaten rice - the only food his wife could find.

When Sudama arrived at the palace, Krishna ran out to greet him! He hugged his old friend, washed his feet, and treated him like the most important guest.

Krishna was just as happy to see his poor friend as Sudama was nervous.`,
        illustration: '🍚',
        decisionPoint: {
          id: 'dp1',
          question: 'Why did Krishna treat poor Sudama so well?',
          options: [
            {
              id: 'opt1',
              text: 'Because Sudama brought a gift',
              consequence: 'Krishna didn\'t care about the gift - he was happy just to see his dear friend again.',
              lesson: 'True friendship doesn\'t depend on wealth or gifts.'
            },
            {
              id: 'opt2',
              text: 'Because true friendship doesn\'t depend on wealth',
              consequence: 'Krishna loved Sudama for who he was, not for what he had. Real friends care about each other regardless of wealth or status!',
              lesson: 'True friendship is based on love and memories, not on money or status.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Greatest Gift',
        content: `Krishna happily ate the simple beaten rice Sudama had brought, saying it was the most delicious food ever because it came from a true friend.

When Sudama returned home, he was amazed to find his small hut replaced by a beautiful house! Krishna had secretly blessed him with prosperity.

This story teaches us that:
- True friendship lasts through rich and poor times
- The value of a gift lies in the love behind it
- Real friends are happy just to be together`,
        illustration: '🏠',
        quiz: [
          {
            id: 'q1',
            question: 'What made Krishna so happy to see Sudama?',
            options: [
              'The gift of beaten rice',
              'Their true childhood friendship',
              'Sudama\'s wealth',
              'He needed something from Sudama'
            ],
            correctAnswer: 1,
            explanation: 'Krishna was happy because Sudama was his true friend from childhood - their friendship meant more than any wealth.'
          }
        ]
      }
    ]
  },
  {
    id: 'ganesha-broken-tusk',
    title: 'Ganesha and the Broken Tusk',
    description: 'Learn why Ganesha has one tusk and what it teaches about dedication!',
    ageRange: '8-10',
    character: 'Ganesha',
    values: ['dedication', 'sacrifice', 'wisdom'],
    illustration: characterImages['Ganesha'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Writing Task',
        content: `When the sage Vyasa wanted to write the Mahabharata, he needed someone to write it down as he spoke. Ganesha agreed to help.

"But I will write without stopping," Ganesha said. "You must speak continuously!"

They began their great work. Day after day, week after week, Ganesha wrote while Vyasa spoke the epic story.`,
        illustration: '📝'
      },
      {
        id: 'ch2',
        title: 'The Broken Pen',
        content: `One day, Ganesha was writing so fast that his pen broke! The story was flowing and there was no time to find another pen.

Without hesitation, Ganesha broke off his own tusk and used it as a pen! He continued writing without missing a single word.

His dedication to completing the task was greater than concern for himself.`,
        illustration: '🐘',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Ganesha breaking his tusk show?',
          options: [
            {
              id: 'opt1',
              text: 'He was careless',
              consequence: 'Ganesha wasn\'t careless - he made a great sacrifice to complete an important task.',
              lesson: 'Sometimes important work requires sacrifice.'
            },
            {
              id: 'opt2',
              text: 'True dedication sometimes requires sacrifice',
              consequence: 'Ganesha\'s willingness to sacrifice his tusk shows incredible dedication. When we truly care about something, we\'re willing to give up comfort for success!',
              lesson: 'Great achievements sometimes require personal sacrifice and total dedication.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Lesson',
        content: `Thanks to Ganesha's sacrifice, the Mahabharata was written - one of the longest and most important epics in the world.

That's why Ganesha is often shown with one tusk. It's a reminder that:
- True dedication requires sacrifice
- Important work is worth giving our best
- Wisdom means knowing what truly matters

Ganesha's broken tusk is not a flaw - it's a badge of honor!`,
        illustration: '📚',
        quiz: [
          {
            id: 'q1',
            question: 'Why does Ganesha have one tusk?',
            options: [
              'It broke in an accident',
              'He broke it to use as a pen while writing the Mahabharata',
              'He was born that way',
              'Someone took it'
            ],
            correctAnswer: 1,
            explanation: 'Ganesha broke his tusk to use as a pen when his original pen broke, showing his dedication to writing the Mahabharata.'
          }
        ]
      }
    ]
  },
  {
    id: 'parvati-ganesha-creation',
    title: 'Parvati Creates Ganesha',
    description: 'The beautiful story of how Goddess Parvati created her son Ganesha!',
    ageRange: '5-7',
    character: 'Parvati',
    values: ['love', 'protection', 'creativity'],
    illustration: characterImages['Parvati'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'A Mother\'s Wish',
        content: `Goddess Parvati lived with Lord Shiva in their beautiful mountain home. Sometimes Shiva would go away to meditate for a very long time.

Parvati wished for a child who would always be with her - someone she could love and who would love her back.

One day, she had a wonderful idea!`,
        illustration: '💭'
      },
      {
        id: 'ch2',
        title: 'The Creation',
        content: `Parvati took some turmeric paste and shaped it into a beautiful boy. Then she breathed life into him!

The boy opened his eyes and smiled at her. "Mother!" he said happily.

Parvati was overjoyed. "You are my son," she said, hugging him. "I will call you Ganesha."`,
        illustration: '👶',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Parvati creating Ganesha show us?',
          options: [
            {
              id: 'opt1',
              text: 'Only magic can create love',
              consequence: 'Parvati\'s love came from her heart, not from magic. The magic just gave her son a form.',
              lesson: 'Love comes from the heart.'
            },
            {
              id: 'opt2',
              text: 'A mother\'s love can create wonderful things',
              consequence: 'Parvati\'s deep love and wish for a child created one of the most beloved gods! A mother\'s love is truly powerful and creative.',
              lesson: 'Love, especially a mother\'s love, can create wonderful things.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Loving Family',
        content: `Parvati gave Ganesha an important job - to guard the door while she bathed. Ganesha took his duty very seriously, just like any good son would.

Later, Ganesha became one of the most beloved gods, known for his wisdom and kindness. But he never forgot that he was created from his mother's love.

This story teaches us:
- A mother's love is powerful and creative
- Family bonds are precious
- We should honor and protect our parents`,
        illustration: '🏠',
        quiz: [
          {
            id: 'q1',
            question: 'How did Parvati create Ganesha?',
            options: [
              'She found him in the forest',
              'She shaped him from turmeric and breathed life into him',
              'He was sent by the gods',
              'He appeared magically'
            ],
            correctAnswer: 1,
            explanation: 'Parvati lovingly shaped Ganesha from turmeric paste and then gave him life.'
          }
        ]
      }
    ]
  },
  {
    id: 'indra-vritra',
    title: 'Indra Defeats the Drought Dragon',
    description: 'See how Indra bravely fought to bring rain back to the world!',
    ageRange: '8-10',
    character: 'Indra',
    values: ['courage', 'responsibility', 'perseverance'],
    illustration: characterImages['Indra'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The World Without Rain',
        content: `A terrible dragon named Vritra had captured all the clouds and water in the world. Rivers dried up, plants withered, and all living beings suffered from thirst.

The dragon coiled around the mountains, keeping the rain imprisoned inside. He was so powerful that no one dared challenge him.

The gods looked to Indra, the king of gods and lord of thunder, for help.`,
        illustration: '🌵'
      },
      {
        id: 'ch2',
        title: 'The Battle',
        content: `Indra was afraid - Vritra was enormous and terrifying. But he knew he had a responsibility to protect all living beings.

Armed with his thunderbolt, Indra faced the dragon. The battle was fierce! Vritra wrapped around Indra, but Indra used his thunderbolt to strike.

Again and again they fought, neither giving up.`,
        illustration: '⚡',
        decisionPoint: {
          id: 'dp1',
          question: 'What helped Indra overcome his fear?',
          options: [
            {
              id: 'opt1',
              text: 'He wasn\'t actually afraid',
              consequence: 'Even the king of gods can feel fear. What matters is choosing to act despite the fear.',
              lesson: 'Courage isn\'t the absence of fear, but acting despite it.'
            },
            {
              id: 'opt2',
              text: 'His sense of responsibility to protect others',
              consequence: 'Indra knew that all living beings depended on him. His responsibility gave him the courage to face his fear and fight!',
              lesson: 'When we know others depend on us, we find the courage to do difficult things.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Rains Return',
        content: `Finally, Indra's thunderbolt found its mark. Vritra was defeated, and all the captured water was released!

Rain poured down upon the earth. Rivers flowed again, plants grew green, and all living beings celebrated. Indra had saved the world!

This story teaches us:
- Courage means acting despite fear
- We all have responsibilities to others
- Perseverance leads to victory`,
        illustration: '🌧️',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Indra fight Vritra?',
            options: [
              'To become famous',
              'Because he enjoyed fighting',
              'To free the rain and save all living beings',
              'Because he was bored'
            ],
            correctAnswer: 2,
            explanation: 'Indra fought Vritra to free the captured rain and save all living beings who were suffering from drought.'
          }
        ]
      }
    ]
  },
  {
    id: 'lakshmana-sleep',
    title: 'Lakshmana\'s Sleepless Devotion',
    description: 'Learn about Lakshmana\'s incredible sacrifice of staying awake for 14 years!',
    ageRange: '11-12',
    character: 'Lakshmana',
    values: ['devotion', 'sacrifice', 'love'],
    illustration: characterImages['Lakshmana'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Promise',
        content: `When Rama, Sita, and Lakshmana went into the forest for 14 years of exile, Lakshmana made a secret promise to himself.

"I will protect my brother and sister-in-law every moment," he vowed. "I will never sleep, not even for one night, so that no harm can come to them while they rest."

It seemed like an impossible promise, but Lakshmana was determined.`,
        illustration: '🌙'
      },
      {
        id: 'ch2',
        title: 'The Goddess of Sleep',
        content: `Nidra, the goddess of sleep, came to Lakshmana. "Everyone must sleep," she said. "It is natural."

Lakshmana folded his hands respectfully. "Dear goddess, I understand. But I need to protect my family. Please let me go without sleep for these 14 years."

The goddess was moved by his devotion. "Very well," she said. "But your wife Urmila will sleep for both of you."`,
        illustration: '💤',
        decisionPoint: {
          id: 'dp1',
          question: 'What made Lakshmana\'s sacrifice so special?',
          options: [
            {
              id: 'opt1',
              text: 'He was just following orders',
              consequence: 'Lakshmana chose to make this sacrifice himself, out of pure love and devotion to his family.',
              lesson: 'The most meaningful sacrifices come from love, not obligation.'
            },
            {
              id: 'opt2',
              text: 'He chose to sacrifice his comfort out of love',
              consequence: 'Lakshmana willingly gave up 14 years of sleep because he loved his brother and Sita so much. True devotion means sacrificing our comfort for those we love!',
              lesson: 'True devotion means willingly sacrificing our comfort for those we love.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Devoted Brother',
        content: `For 14 years, Lakshmana kept watch every night while Rama and Sita slept safely. He never complained, never wavered.

His wife Urmila's sacrifice was equally great - she slept for 14 years so that Lakshmana could stay awake.

This story teaches us:
- True devotion requires sacrifice
- Protecting loved ones is a noble act
- Family members support each other's duties`,
        illustration: '☀️',
        quiz: [
          {
            id: 'q1',
            question: 'How long did Lakshmana go without sleep?',
            options: [
              'One year',
              '14 years',
              'One month',
              'He didn\'t give up sleep'
            ],
            correctAnswer: 1,
            explanation: 'Lakshmana stayed awake for the entire 14 years of exile to protect Rama and Sita.'
          }
        ]
      }
    ]
  },
  {
    id: 'kali-time',
    title: 'Kali and the Power of Time',
    description: 'Understand why Kali represents time and transformation!',
    ageRange: '11-12',
    character: 'Kali',
    values: ['wisdom', 'acceptance', 'transformation'],
    illustration: characterImages['Kali'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Dark Goddess',
        content: `Kali is often shown with dark skin and fierce appearance. Many people find her scary at first.

But her name "Kali" comes from "Kala," which means time. She represents the powerful force of time that affects everything.

Just as time changes everything - day to night, young to old, seed to tree - Kali represents transformation.`,
        illustration: '⏰'
      },
      {
        id: 'ch2',
        title: 'The Dance of Time',
        content: `When Kali dances, she represents how time moves forward, changing everything it touches.

Old things must end for new things to begin. This isn't sad - it's how life renews itself. Spring follows winter, new plants grow from old seeds.

Kali teaches us not to fear change, but to understand it as natural and necessary.`,
        illustration: '💃',
        decisionPoint: {
          id: 'dp1',
          question: 'What should we learn from Kali\'s representation of time?',
          options: [
            {
              id: 'opt1',
              text: 'Change is scary and should be avoided',
              consequence: 'Change cannot be avoided - it\'s a natural part of life. Kali teaches us to accept and embrace it.',
              lesson: 'Change is natural and shouldn\'t be feared.'
            },
            {
              id: 'opt2',
              text: 'Change is natural and leads to renewal',
              consequence: 'Kali teaches that change and transformation are natural. Endings lead to new beginnings, and this is how life continues and grows!',
              lesson: 'Accepting change as natural helps us grow and renew ourselves.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Embracing Change',
        content: `Kali may look fierce, but she is a mother goddess who protects her children.

Her lessons include:
- Change is a natural part of life
- We should not fear transformation
- Old things end so new things can begin
- Time is a powerful teacher

Next time you face a change in life, remember Kali's teaching: change is not something to fear, but something to understand and accept.`,
        illustration: '🦋',
        quiz: [
          {
            id: 'q1',
            question: 'What does Kali\'s name mean?',
            options: [
              'Dark',
              'Time',
              'Strong',
              'Fire'
            ],
            correctAnswer: 1,
            explanation: 'Kali comes from "Kala," which means time. She represents the transformative power of time.'
          }
        ]
      }
    ]
  },
  // === NEW STORIES BATCH 2 ===
  {
    id: 'krishna-kaliya',
    title: 'Krishna and the Serpent Kaliya',
    description: 'Watch Krishna tame the dangerous serpent Kaliya and save the river!',
    ageRange: '5-7',
    character: 'Krishna',
    values: ['courage', 'compassion', 'forgiveness'],
    illustration: characterImages['Krishna'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Poisoned River',
        content: `In the river Yamuna lived a great serpent named Kaliya. He was so poisonous that the water became deadly. Birds flying over it would fall, and no one could drink from it.

The people of Vrindavan were worried. Their beloved river was no longer safe.

One day, Krishna's ball fell into the poisoned waters. Without hesitation, young Krishna jumped in after it!`,
        illustration: '🐍'
      },
      {
        id: 'ch2',
        title: 'The Dance on the Serpent',
        content: `Kaliya rose up angrily, his many heads hissing. But Krishna was not afraid. He grabbed Kaliya's tail and climbed onto his heads!

Then Krishna began to dance! His feet moved gracefully on Kaliya's hoods, and the serpent couldn't shake him off.

Kaliya's wives begged Krishna to spare their husband.`,
        illustration: '💃',
        decisionPoint: {
          id: 'dp1',
          question: 'What should Krishna do?',
          options: [
            {
              id: 'opt1',
              text: 'Destroy Kaliya completely',
              consequence: 'While Kaliya was dangerous, destroying him wasn\'t the only solution. Krishna chose a wiser path.',
              lesson: 'Sometimes mercy is more powerful than punishment.'
            },
            {
              id: 'opt2',
              text: 'Show mercy and give Kaliya a chance',
              consequence: 'Krishna showed compassion. He told Kaliya to leave and find a new home in the ocean, where he wouldn\'t harm anyone. Mercy and wisdom found a peaceful solution!',
              lesson: 'Showing mercy and finding peaceful solutions is often better than punishment.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Peace Returns',
        content: `Krishna forgave Kaliya and told him to leave the Yamuna and go to the ocean. Kaliya promised never to harm anyone again and left peacefully.

The river became clean and safe once more. The villagers celebrated!

This story teaches us:
- Courage helps us face dangers
- Compassion is stronger than anger
- There's often a peaceful solution to problems`,
        illustration: '🌊',
        quiz: [
          {
            id: 'q1',
            question: 'How did Krishna solve the problem with Kaliya?',
            options: [
              'He destroyed Kaliya',
              'He showed mercy and sent Kaliya to live elsewhere peacefully',
              'He ran away',
              'He asked for help'
            ],
            correctAnswer: 1,
            explanation: 'Krishna showed compassion and gave Kaliya a chance to live peacefully elsewhere instead of destroying him.'
          }
        ]
      }
    ]
  },
  {
    id: 'draupadi-akshaya-patra',
    title: 'Draupadi and the Magical Vessel',
    description: 'Learn how Draupadi fed thousands with a divine gift!',
    ageRange: '8-10',
    character: 'Draupadi',
    values: ['faith', 'hospitality', 'devotion'],
    illustration: characterImages['Draupadi'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Divine Gift',
        content: `When the Pandavas were exiled to the forest, Draupadi worried about how to feed everyone who came to visit them.

The Sun god blessed her with the Akshaya Patra - a magical vessel that would provide unlimited food until Draupadi herself had eaten.

With this gift, Draupadi could serve food to thousands of visitors every day.`,
        illustration: '🍲'
      },
      {
        id: 'ch2',
        title: 'The Sage\'s Visit',
        content: `One day, after Draupadi had finished eating, the sage Durvasa arrived with thousands of his students. He was known for his terrible temper if not served properly!

The Akshaya Patra was empty because Draupadi had already eaten. What could she do?

In desperation, Draupadi prayed to Krishna for help.`,
        illustration: '😰',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Draupadi\'s situation teach us?',
          options: [
            {
              id: 'opt1',
              text: 'We should never hope when things look bad',
              consequence: 'Draupadi didn\'t give up hope. She turned to her faith in Krishna, and help came!',
              lesson: 'We should never lose faith, even in difficult situations.'
            },
            {
              id: 'opt2',
              text: 'Faith and prayer can help in difficult times',
              consequence: 'Draupadi\'s faith in Krishna saved her. When we face impossible situations, faith gives us strength and hope!',
              lesson: 'Faith and devotion can help us through the most difficult challenges.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Miracle',
        content: `Krishna appeared and asked Draupadi if there was any food left. She found one grain of rice stuck to the vessel!

Krishna ate that single grain and said, "Now the whole world is satisfied."

When Durvasa and his students came back from their bath, they were miraculously no longer hungry and left happily.

This story teaches us about faith, hospitality, and how small things can have great power.`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'What saved Draupadi from Durvasa\'s anger?',
            options: [
              'She cooked more food',
              'Her faith in Krishna and one grain of rice',
              'The Pandavas fought Durvasa',
              'She hid from him'
            ],
            correctAnswer: 1,
            explanation: 'Draupadi\'s faith in Krishna and a single grain of rice miraculously satisfied everyone.'
          }
        ]
      }
    ]
  },
  {
    id: 'shiva-nataraja',
    title: 'Shiva\'s Cosmic Dance',
    description: 'Discover the meaning behind Shiva\'s powerful dance as Nataraja!',
    ageRange: '11-12',
    character: 'Shiva',
    values: ['wisdom', 'balance', 'transformation'],
    illustration: characterImages['Shiva'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Dancing God',
        content: `Shiva is often shown dancing within a ring of fire. This form is called Nataraja - the Lord of Dance.

But this isn't just any dance. It's the Tandava - a cosmic dance that represents the cycles of creation and destruction in the universe.

Every movement in Shiva's dance has deep meaning.`,
        illustration: '💫'
      },
      {
        id: 'ch2',
        title: 'The Symbols',
        content: `In one hand, Shiva holds a drum (damaru) - representing creation and the sound of the universe.
In another hand, he holds fire - representing transformation and renewal.
His raised foot shows liberation from ignorance.
He dances on a small figure - representing the defeat of ego and ignorance.

The ring of fire around him represents the cycle of time.`,
        illustration: '🔥',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Shiva\'s dance teach us about life?',
          options: [
            {
              id: 'opt1',
              text: 'Life is just about dancing',
              consequence: 'Shiva\'s dance is a metaphor for deeper truths about the nature of the universe.',
              lesson: 'Ancient stories often contain deep wisdom in symbolic forms.'
            },
            {
              id: 'opt2',
              text: 'Life is a balance of creation and transformation',
              consequence: 'Shiva\'s dance teaches that life involves constant cycles of creation and transformation. Understanding this helps us accept change as natural!',
              lesson: 'Life is a constant dance of creation and transformation, and understanding this brings peace.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Eternal Dance',
        content: `Shiva's dance continues forever, symbolizing that the universe is always in motion - always creating, changing, and renewing.

The lessons of Nataraja:
- Change is constant and natural
- Creation and transformation go together
- We should overcome ignorance and ego
- Life moves in cycles, like a dance

When you see the Nataraja statue, remember these profound teachings about life and the universe!`,
        illustration: '🌌',
        quiz: [
          {
            id: 'q1',
            question: 'What does Shiva\'s Tandava dance represent?',
            options: [
              'Just entertainment',
              'The cosmic cycles of creation and transformation',
              'A way to exercise',
              'A celebration'
            ],
            correctAnswer: 1,
            explanation: 'The Tandava represents the cosmic cycles of creation and transformation in the universe.'
          }
        ]
      }
    ]
  },
  {
    id: 'vishnu-matsya',
    title: 'Vishnu as the Great Fish',
    description: 'Learn how Vishnu saved humanity as a giant fish!',
    ageRange: '8-10',
    character: 'Vishnu',
    values: ['protection', 'wisdom', 'preparation'],
    illustration: characterImages['Vishnu'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Little Fish',
        content: `King Manu was praying by a river when a tiny fish swam into his hands. "Please save me from the bigger fish!" it said.

Manu was kind and put the fish in a small pot. But the fish grew quickly! Soon it needed a bigger pot, then a lake, then the ocean!

Manu realized this was no ordinary fish.`,
        illustration: '🐟'
      },
      {
        id: 'ch2',
        title: 'The Warning',
        content: `The giant fish revealed itself as Vishnu in the form of Matsya. He warned Manu:

"A great flood is coming that will destroy everything. Build a large boat and fill it with seeds, plants, and animals. Tie your boat to my horn, and I will guide you to safety."

Manu believed Vishnu and began preparing immediately.`,
        illustration: '⛵',
        decisionPoint: {
          id: 'dp1',
          question: 'Why was it important that Manu believed and prepared?',
          options: [
            {
              id: 'opt1',
              text: 'Just to follow orders',
              consequence: 'Manu\'s faith and preparation saved not just himself, but all life on earth!',
              lesson: 'Faith combined with action can save many lives.'
            },
            {
              id: 'opt2',
              text: 'His faith and preparation would save all life',
              consequence: 'By believing Vishnu\'s warning and preparing properly, Manu was able to preserve life on earth. Faith must be combined with action!',
              lesson: 'When we receive good advice, we should act on it with faith and diligence.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Great Rescue',
        content: `When the flood came, it covered everything. But Manu's boat, tied to Matsya's horn, sailed safely through the storms.

When the waters receded, Manu released all the seeds, plants, and animals. Life began again on earth.

This story teaches us:
- Being kind to small creatures can have great rewards
- Wisdom includes listening to warnings
- Preparation helps us survive difficulties`,
        illustration: '🌈',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Vishnu appear as a fish to Manu?',
            options: [
              'To play a game',
              'To warn him and help save life from the flood',
              'To teach him fishing',
              'To scare him'
            ],
            correctAnswer: 1,
            explanation: 'Vishnu appeared as Matsya to warn Manu about the flood and help him save all life on earth.'
          }
        ]
      }
    ]
  },
  {
    id: 'hanuman-humility',
    title: 'Hanuman\'s Hidden Power',
    description: 'Discover how Hanuman forgot his powers and learned about humility!',
    ageRange: '8-10',
    character: 'Hanuman',
    values: ['humility', 'self-discovery', 'faith'],
    illustration: characterImages['Hanuman'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Forgotten Powers',
        content: `As a child, Hanuman was very mischievous. He used his powers to trouble the sages who were meditating in the forest.

The sages cursed him: "You will forget your powers until someone reminds you of them!"

From that day, Hanuman forgot how powerful he really was.`,
        illustration: '🙈'
      },
      {
        id: 'ch2',
        title: 'The Reminder',
        content: `Years later, when the monkey army needed someone to cross the ocean to find Sita, everyone was worried. The ocean was too wide!

Jambavan, the wise bear, remembered the old curse. He went to Hanuman and reminded him of his incredible powers.

"You are the son of the wind god! You can leap across the ocean!"`,
        illustration: '💪',
        decisionPoint: {
          id: 'dp1',
          question: 'What does this story teach about our own potential?',
          options: [
            {
              id: 'opt1',
              text: 'We should wait for others to tell us what we can do',
              consequence: 'While others can help remind us, we should also believe in ourselves!',
              lesson: 'Sometimes we need reminders, but we should also develop self-belief.'
            },
            {
              id: 'opt2',
              text: 'We often have more potential than we realize',
              consequence: 'Like Hanuman, we all have hidden strengths and abilities. Sometimes we just need the right person or situation to help us discover them!',
              lesson: 'We all have hidden potential waiting to be discovered and used for good.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Great Discovery',
        content: `As Jambavan spoke, Hanuman remembered everything! His body grew large and powerful. With one mighty leap, he crossed the ocean!

This story teaches us:
- We often underestimate ourselves
- The right encouragement can unlock our potential
- Humility is important, but so is knowing our strengths
- Sometimes we need others to remind us who we are

Hanuman's story shows that our greatest powers often lie hidden until we're ready to use them for good.`,
        illustration: '🚀',
        quiz: [
          {
            id: 'q1',
            question: 'Why had Hanuman forgotten his powers?',
            options: [
              'He was too old',
              'A sage\'s curse made him forget until someone reminded him',
              'He never had powers',
              'He gave them away'
            ],
            correctAnswer: 1,
            explanation: 'Sages cursed Hanuman to forget his powers until someone reminded him of them, because he had been mischievous as a child.'
          }
        ]
      }
    ]
  },
  {
    id: 'narasimha-evening',
    title: 'Narasimha at Twilight',
    description: 'Learn how Narasimha found a way to protect Prahlada despite impossible conditions!',
    ageRange: '11-12',
    character: 'Narasimha',
    values: ['wisdom', 'protection', 'cleverness'],
    illustration: characterImages['Narasimha'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Impossible Boon',
        content: `The demon king Hiranyakashipu had received a powerful boon: he could not be killed by a human or animal, inside or outside, during day or night, on earth or in the sky, by any weapon.

He thought himself immortal! He became cruel and demanded everyone worship him.

But his own son Prahlada worshipped only Vishnu.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'The Perfect Solution',
        content: `Hiranyakashipu tried many times to kill Prahlada, but Vishnu always protected him. Finally, the king challenged:

"If your Vishnu is everywhere, is he in this pillar?"

When Hiranyakashipu struck the pillar, Narasimha emerged - half-man, half-lion (neither human nor animal)!`,
        illustration: '🦁',
        decisionPoint: {
          id: 'dp1',
          question: 'How did Narasimha solve the impossible conditions?',
          options: [
            {
              id: 'opt1',
              text: 'He just ignored them',
              consequence: 'Narasimha didn\'t ignore them - he found creative ways to fulfill every condition while still protecting Prahlada.',
              lesson: 'Wisdom finds creative solutions within constraints.'
            },
            {
              id: 'opt2',
              text: 'He found creative solutions that satisfied each condition',
              consequence: 'Narasimha appeared at twilight (neither day nor night), on a threshold (neither inside nor outside), placed the demon on his lap (neither earth nor sky), and used his claws (not a weapon). Divine wisdom finds a way!',
              lesson: 'True wisdom finds creative solutions that satisfy all conditions.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Divine Wisdom',
        content: `Narasimha defeated Hiranyakashipu by:
- Appearing at twilight (neither day nor night)
- Standing on the threshold (neither inside nor outside)
- Placing him on his lap (neither earth nor sky)
- Using his claws (not a conventional weapon)

This story teaches us that:
- Divine wisdom can solve any problem
- Arrogance leads to downfall
- Faith and devotion are always protected`,
        illustration: '✨',
        quiz: [
          {
            id: 'q1',
            question: 'When did Narasimha appear?',
            options: [
              'At noon',
              'At twilight - neither day nor night',
              'At midnight',
              'At sunrise'
            ],
            correctAnswer: 1,
            explanation: 'Narasimha appeared at twilight, which is neither day nor night, to satisfy one of the boon\'s conditions.'
          }
        ]
      }
    ]
  },
  {
    id: 'buddha-elephant',
    title: 'Buddha and the Angry Elephant',
    description: 'See how Buddha\'s calm compassion tamed a raging elephant!',
    ageRange: '8-10',
    character: 'Buddha',
    values: ['compassion', 'peace', 'courage'],
    illustration: characterImages['Buddha'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Dangerous Beast',
        content: `Buddha's cousin Devadatta was jealous of him. He plotted to have Buddha killed.

Devadatta found a fierce elephant named Nalagiri, made it drunk, and released it when Buddha was walking through town.

The massive elephant charged toward Buddha, trampling everything in its path. People screamed and ran!`,
        illustration: '🐘'
      },
      {
        id: 'ch2',
        title: 'The Calm Response',
        content: `Everyone begged Buddha to run, but he stood still. As the elephant rushed closer, Buddha remained calm and full of compassion.

He looked at Nalagiri with loving-kindness. Something in his peaceful presence touched the elephant's heart.

Nalagiri slowed down... and stopped.`,
        illustration: '🙏',
        decisionPoint: {
          id: 'dp1',
          question: 'Why did Buddha\'s calm compassion work?',
          options: [
            {
              id: 'opt1',
              text: 'It was just luck',
              consequence: 'It wasn\'t luck. Genuine compassion and inner peace have a powerful effect on all beings.',
              lesson: 'True compassion is a powerful force that can transform anger.'
            },
            {
              id: 'opt2',
              text: 'Genuine compassion can calm even the most angry heart',
              consequence: 'Buddha\'s pure loving-kindness touched the elephant\'s heart. Even great anger can be transformed by genuine compassion and peace!',
              lesson: 'Compassion and inner peace are more powerful than anger and violence.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Transformation',
        content: `The fierce elephant became gentle. It bowed its great head before Buddha, who stroked it kindly.

From that day, Nalagiri was never violent again.

This story teaches us:
- Compassion is more powerful than violence
- Inner peace can transform dangerous situations
- Anger can be overcome with loving-kindness
- True courage is remaining calm in the face of danger`,
        illustration: '☮️',
        quiz: [
          {
            id: 'q1',
            question: 'How did Buddha stop the angry elephant?',
            options: [
              'He fought it',
              'He ran away',
              'His calm compassion touched its heart',
              'Someone else stopped it'
            ],
            correctAnswer: 2,
            explanation: 'Buddha\'s genuine compassion and inner peace calmed the elephant and transformed its anger.'
          }
        ]
      }
    ]
  },
  {
    id: 'karthikeya-demon-army',
    title: 'Karthikeya Leads the Gods',
    description: 'See how young Karthikeya became the commander of the divine army!',
    ageRange: '11-12',
    character: 'Karthikeya',
    values: ['leadership', 'courage', 'wisdom'],
    illustration: characterImages['Karthikeya'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Demon Threat',
        content: `The demon Tarakasura had become incredibly powerful. He had a boon that only a son of Shiva could defeat him.

The gods were suffering under his rule. When Karthikeya, son of Shiva and Parvati, was born, they knew he was destined to save them.

But Karthikeya was just a child. Could he really lead an army?`,
        illustration: '⚔️'
      },
      {
        id: 'ch2',
        title: 'The Young Commander',
        content: `Despite his youth, Karthikeya showed wisdom beyond his years. The gods gave him their best weapons, and his father Shiva blessed him with the powerful Vel (spear).

Karthikeya organized the divine army with skill and led them into battle. His courage inspired everyone.

Even the mightiest warriors were amazed by this young commander.`,
        illustration: '🏆',
        decisionPoint: {
          id: 'dp1',
          question: 'What made Karthikeya a good leader despite his young age?',
          options: [
            {
              id: 'opt1',
              text: 'Just his divine birth',
              consequence: 'While his divine birth gave him abilities, his wisdom, courage, and how he treated others made him a true leader.',
              lesson: 'True leadership comes from character, not just ability.'
            },
            {
              id: 'opt2',
              text: 'His wisdom, courage, and ability to inspire others',
              consequence: 'Karthikeya was a great leader because he was wise, brave, and inspired confidence in his followers. True leadership is about character and earning trust!',
              lesson: 'Great leaders inspire others through their wisdom, courage, and character.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'Victory',
        content: `Karthikeya faced Tarakasura and defeated him with his divine Vel. The worlds were saved!

The gods made Karthikeya their permanent commander (Senapati).

This story teaches us:
- Age doesn't determine capability
- Good leaders inspire through example
- Courage and wisdom together create victory
- Everyone has a role to play in fighting evil`,
        illustration: '🌟',
        quiz: [
          {
            id: 'q1',
            question: 'What made Karthikeya a successful leader?',
            options: [
              'Only his divine weapons',
              'His wisdom, courage, and ability to inspire',
              'His age',
              'Just his birth'
            ],
            correctAnswer: 1,
            explanation: 'Karthikeya succeeded because of his wisdom, courage, and his ability to inspire and lead others.'
          }
        ]
      }
    ]
  },
  {
    id: 'durga-creation',
    title: 'The Birth of Durga',
    description: 'Learn how the mighty goddess Durga was created from divine light!',
    ageRange: '8-10',
    character: 'Durga',
    values: ['unity', 'strength', 'purpose'],
    illustration: characterImages['Durga'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Impossible Enemy',
        content: `The buffalo demon Mahishasura had conquered heaven and earth. He was unbeatable because he had a boon - no man or god could kill him.

The gods tried fighting him one by one, but each was defeated. They realized they needed something new - something they had never tried before.

They needed to work together!`,
        illustration: '👹'
      },
      {
        id: 'ch2',
        title: 'The Unity of Powers',
        content: `All the gods gathered and combined their divine energies. From this united power, a brilliant light emerged.

From the light stepped Durga - a magnificent goddess with many arms, each holding a weapon gifted by a different god.

Shiva gave his trident, Vishnu his discus, Indra his thunderbolt, and many more.`,
        illustration: '✨',
        decisionPoint: {
          id: 'dp1',
          question: 'What was special about how Durga was created?',
          options: [
            {
              id: 'opt1',
              text: 'She was created by one powerful god',
              consequence: 'Durga was special because she was created by ALL the gods working together.',
              lesson: 'Unity creates strength that individuals alone cannot achieve.'
            },
            {
              id: 'opt2',
              text: 'She was created by all the gods uniting their powers',
              consequence: 'Durga represents the power of unity. When everyone contributes their best, they create something more powerful than any individual!',
              lesson: 'When we unite our strengths, we can overcome any challenge.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Power of Unity',
        content: `Durga fought Mahishasura and won because she carried the combined strength of all the gods.

This story teaches us:
- Unity is powerful
- When people work together, they can overcome any challenge
- Everyone has something valuable to contribute
- Coming together for a good cause creates amazing results

Durga represents what happens when we stop competing and start cooperating!`,
        illustration: '💪',
        quiz: [
          {
            id: 'q1',
            question: 'How was Durga created?',
            options: [
              'By one god alone',
              'She was always there',
              'By all the gods combining their powers',
              'By magic'
            ],
            correctAnswer: 2,
            explanation: 'Durga was created when all the gods united their divine powers, making her stronger than any individual god.'
          }
        ]
      }
    ]
  },
  {
    id: 'rama-promise',
    title: 'Rama\'s Promise to His Father',
    description: 'Learn about Rama\'s incredible dedication to keeping his word!',
    ageRange: '11-12',
    character: 'Rama',
    values: ['dharma', 'obedience', 'sacrifice'],
    illustration: characterImages['Rama'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Coronation',
        content: `Rama was about to be crowned king of Ayodhya. The whole kingdom was celebrating! Everyone loved Rama for his kindness and fairness.

But Queen Kaikeyi, influenced by her maid, asked King Dasharatha for two boons he had promised her long ago:

Her son Bharata should be king, and Rama should go to the forest for 14 years.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'The Difficult Choice',
        content: `King Dasharatha was heartbroken. He begged Kaikeyi to change her mind. Rama could have fought for his right to the throne.

But Rama said, "A father's promise must be kept. I will go to the forest happily. This is dharma."

Everyone was amazed at Rama's sacrifice and dedication to truth.`,
        illustration: '🌲',
        decisionPoint: {
          id: 'dp1',
          question: 'Why did Rama accept exile so willingly?',
          options: [
            {
              id: 'opt1',
              text: 'He didn\'t care about being king',
              consequence: 'Rama cared deeply, but his commitment to dharma and his father\'s honor was more important to him.',
              lesson: 'Sometimes we sacrifice what we want for what is right.'
            },
            {
              id: 'opt2',
              text: 'His father\'s honor and dharma were more important than the throne',
              consequence: 'Rama understood that keeping one\'s word and maintaining dharma were more valuable than any kingdom. His sacrifice showed true nobility!',
              lesson: 'True greatness is shown in sacrifice and commitment to principles.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The True King',
        content: `Rama went to the forest with Sita and Lakshmana. His brother Bharata was furious at his mother for what she had done.

Bharata went to the forest and begged Rama to return, but Rama insisted on keeping his father's word for the full 14 years.

Bharata placed Rama's sandals on the throne and ruled as a caretaker until Rama returned.

This story teaches us:
- A promise must be kept
- Dharma is more important than personal gain
- True leaders inspire through sacrifice`,
        illustration: '🩴',
        quiz: [
          {
            id: 'q1',
            question: 'Why is Rama considered an example of dharma?',
            options: [
              'Because he was a powerful warrior',
              'Because he kept his father\'s promise even at great personal cost',
              'Because he was king',
              'Because he was rich'
            ],
            correctAnswer: 1,
            explanation: 'Rama showed dharma by honoring his father\'s promise even when it meant giving up the kingdom.'
          }
        ]
      }
    ]
  },
  {
    id: 'ganesha-moon',
    title: 'Ganesha and the Laughing Moon',
    description: 'Find out why we don\'t look at the moon on Ganesha\'s birthday!',
    ageRange: '5-7',
    character: 'Ganesha',
    values: ['humility', 'kindness', 'self-acceptance'],
    illustration: characterImages['Ganesha'],
    estimatedMinutes: 8,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Big Feast',
        content: `One evening, Ganesha went to many homes during a festival. At each home, people offered him delicious sweets and treats, which he happily ate.

By the end of the night, Ganesha's tummy was very full! He climbed onto his mouse and headed home.

But the mouse was so small, and Ganesha was so full, that the mouse tripped!`,
        illustration: '🍭'
      },
      {
        id: 'ch2',
        title: 'The Moon\'s Laughter',
        content: `When Ganesha fell, his tummy burst open and all the sweets spilled out! Ganesha quickly scooped them up and tied a snake around his belly to hold it together.

Just then, the Moon saw what happened and laughed loudly at Ganesha!

Ganesha was hurt by the Moon's unkindness.`,
        illustration: '🌙',
        decisionPoint: {
          id: 'dp1',
          question: 'What was wrong with the Moon\'s behavior?',
          options: [
            {
              id: 'opt1',
              text: 'Nothing was wrong, it was funny',
              consequence: 'Laughing at someone who has fallen or made a mistake is unkind. It hurts their feelings.',
              lesson: 'We should never laugh at others\' misfortunes.'
            },
            {
              id: 'opt2',
              text: 'Laughing at someone\'s misfortune is unkind',
              consequence: 'The Moon was cruel to laugh at Ganesha. When someone falls or makes a mistake, we should help them, not mock them!',
              lesson: 'Be kind when others face difficulties. Never mock someone who is struggling.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Lesson',
        content: `Ganesha was so hurt that he said no one should look at the Moon on his birthday (Ganesha Chaturthi).

The Moon realized his mistake and apologized. Ganesha forgave him but kept the rule as a reminder.

This story teaches us:
- Don't laugh at others' misfortunes
- Be kind when others make mistakes
- It's okay to have a big appetite!
- Forgiving others is good, but some lessons should be remembered`,
        illustration: '💫',
        quiz: [
          {
            id: 'q1',
            question: 'Why did Ganesha get upset with the Moon?',
            options: [
              'The Moon was too bright',
              'The Moon laughed at Ganesha when he fell',
              'The Moon ate his sweets',
              'The Moon didn\'t come to the festival'
            ],
            correctAnswer: 1,
            explanation: 'The Moon unkindly laughed at Ganesha when he fell, which hurt Ganesha\'s feelings.'
          }
        ]
      }
    ]
  },
  {
    id: 'lakshmi-diwali',
    title: 'Lakshmi\'s Visit on Diwali',
    description: 'Learn why we light lamps on Diwali to welcome Goddess Lakshmi!',
    ageRange: '5-7',
    character: 'Lakshmi',
    values: ['cleanliness', 'hospitality', 'gratitude'],
    illustration: characterImages['Lakshmi'],
    estimatedMinutes: 7,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Special Night',
        content: `Diwali is called the festival of lights. On this special night, Goddess Lakshmi visits homes to bless them with prosperity and happiness.

But Lakshmi only enters homes that are clean, bright, and welcoming. She loves the light of clay lamps (diyas) and the warmth of happy families.

Every year, people prepare their homes for her visit.`,
        illustration: '🪔'
      },
      {
        id: 'ch2',
        title: 'Preparing for Lakshmi',
        content: `To welcome Lakshmi, families:
- Clean their homes until everything sparkles
- Light many diyas and candles
- Create beautiful rangoli designs
- Keep their doors open
- Prepare sweets and prayers

The light from the lamps guides Lakshmi to their homes.`,
        illustration: '✨',
        decisionPoint: {
          id: 'dp1',
          question: 'Why do we clean and light lamps for Diwali?',
          options: [
            {
              id: 'opt1',
              text: 'Just because it\'s tradition',
              consequence: 'While it is tradition, there\'s a deeper meaning - it shows we care and are grateful for blessings.',
              lesson: 'Understanding the meaning behind traditions makes them more special.'
            },
            {
              id: 'opt2',
              text: 'To show we appreciate blessings and welcome good things',
              consequence: 'Cleaning and lighting lamps shows gratitude and creates a welcoming space for good fortune. When we prepare with love, we invite blessings!',
              lesson: 'Showing gratitude and preparing with love invites positive things into our lives.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Blessings',
        content: `When Lakshmi sees a clean, bright, and loving home, she enters and blesses the family with:
- Prosperity and success
- Happiness and health
- Good fortune for the year

This is why Diwali is such a happy festival!

The story teaches us:
- Keep our spaces clean and welcoming
- Be grateful for what we have
- Light can push away darkness
- Preparing with love brings blessings`,
        illustration: '🎆',
        quiz: [
          {
            id: 'q1',
            question: 'What kind of homes does Lakshmi visit on Diwali?',
            options: [
              'The biggest houses',
              'Clean, bright, and welcoming homes',
              'Only rich homes',
              'Only new homes'
            ],
            correctAnswer: 1,
            explanation: 'Lakshmi visits homes that are clean, bright with lamps, and have welcoming, loving families.'
          }
        ]
      }
    ]
  },
  {
    id: 'saraswati-voice',
    title: 'Saraswati Gives the Gift of Speech',
    description: 'Discover how Saraswati blessed the world with the power of language!',
    ageRange: '8-10',
    character: 'Saraswati',
    values: ['communication', 'wisdom', 'creativity'],
    illustration: characterImages['Saraswati'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Silent World',
        content: `Long ago, the world was silent. Beings could think, but they couldn't express their thoughts. They couldn't share stories, sing songs, or tell each other "I love you."

Knowledge existed, but it couldn't be passed from one person to another. The world was beautiful but lonely.

The gods saw this and asked Saraswati to help.`,
        illustration: '🔇'
      },
      {
        id: 'ch2',
        title: 'The Gift',
        content: `Saraswati played her veena, and magical sounds filled the world. She taught beings how to make sounds with meaning - words!

She gave them:
- Languages to communicate
- Music to express emotions
- Writing to preserve knowledge
- Poetry to capture beauty

The world was transformed!`,
        illustration: '🎵',
        decisionPoint: {
          id: 'dp1',
          question: 'Why is the gift of language so important?',
          options: [
            {
              id: 'opt1',
              text: 'Just for talking',
              consequence: 'Language is much more - it allows us to share love, pass on wisdom, and connect with others.',
              lesson: 'Language connects us in many deep ways.'
            },
            {
              id: 'opt2',
              text: 'It allows us to connect, share knowledge, and express love',
              consequence: 'Language is one of the greatest gifts! It lets us share stories, express feelings, teach others, and connect across time and space.',
              lesson: 'Communication is a precious gift that connects all of humanity.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Responsibility',
        content: `Saraswati reminded everyone that language is a gift that must be used wisely:
- Use words to help, not hurt
- Share knowledge generously
- Create beautiful things with language
- Be truthful in speech

This is why students pray to Saraswati - she is the goddess of all knowledge and communication.

Her story teaches us to value and use our words wisely!`,
        illustration: '📖',
        quiz: [
          {
            id: 'q1',
            question: 'What did Saraswati give to the world?',
            options: [
              'Only music',
              'Language, music, and all forms of communication',
              'Only books',
              'Only art'
            ],
            correctAnswer: 1,
            explanation: 'Saraswati blessed the world with language, music, writing, and all forms of communication and knowledge.'
          }
        ]
      }
    ]
  },
  {
    id: 'arjuna-ekalavya',
    title: 'Arjuna and Ekalavya',
    description: 'A thought-provoking story about dedication and sacrifice in learning!',
    ageRange: '11-12',
    character: 'Arjuna',
    values: ['dedication', 'sacrifice', 'respect'],
    illustration: characterImages['Arjuna'],
    estimatedMinutes: 11,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Determined Student',
        content: `Ekalavya was a young tribal boy who desperately wanted to learn archery from Dronacharya, the greatest teacher. But Drona taught only princes.

Rejected but not defeated, Ekalavya made a clay statue of Drona in the forest. Every day, he practiced archery in front of the statue, imagining Drona was teaching him.

His dedication was extraordinary.`,
        illustration: '🏹'
      },
      {
        id: 'ch2',
        title: 'The Discovery',
        content: `One day, Drona and his students were in the forest when a dog came running with arrows in its mouth - the arrows had been shot so skillfully that the dog wasn't hurt at all!

They found Ekalavya, who admitted he considered Drona his guru, even from afar. His skill was even greater than Arjuna's!

Drona was troubled. He had promised Arjuna would be the greatest archer.`,
        illustration: '🎯',
        decisionPoint: {
          id: 'dp1',
          question: 'What does Ekalavya\'s story teach us about learning?',
          options: [
            {
              id: 'opt1',
              text: 'We need a teacher physically present',
              consequence: 'Ekalavya proved that with dedication, we can learn even without direct teaching.',
              lesson: 'True dedication can overcome many obstacles.'
            },
            {
              id: 'opt2',
              text: 'Dedication and practice can overcome any obstacle',
              consequence: 'Ekalavya\'s incredible skill came from his unwavering dedication. When we truly commit to learning, we can achieve amazing things!',
              lesson: 'True dedication and practice can help us learn even in the most challenging circumstances.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Sacrifice',
        content: `Drona asked for guru dakshina - Ekalavya's right thumb. Without hesitation, Ekalavya cut off his thumb and gave it to Drona.

This story raises many questions about fairness and sacrifice. Different people see it differently.

What it clearly shows:
- Ekalavya's incredible dedication and respect
- The power of self-motivated learning
- Sometimes talent comes from unexpected places
- Sacrifice for principles, even when unfair, shows great character`,
        illustration: '💔',
        quiz: [
          {
            id: 'q1',
            question: 'How did Ekalavya become such a skilled archer?',
            options: [
              'Drona taught him directly',
              'He practiced with incredible dedication using a statue of Drona',
              'He was born with the skill',
              'Someone else taught him'
            ],
            correctAnswer: 1,
            explanation: 'Ekalavya practiced with extraordinary dedication in front of a clay statue of Drona, whom he considered his guru.'
          }
        ]
      }
    ]
  },
  {
    id: 'sita-birth',
    title: 'Sita - Daughter of the Earth',
    description: 'Learn about the miraculous birth of the beloved princess Sita!',
    ageRange: '5-7',
    character: 'Sita',
    values: ['purity', 'nature', 'blessing'],
    illustration: characterImages['Sita'],
    estimatedMinutes: 7,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The King\'s Prayer',
        content: `King Janaka of Mithila was a good and wise king. He loved his people and cared for his land.

One day, while preparing a field for a sacred ceremony, something wonderful happened. As the king plowed the earth, he found a beautiful baby girl in a golden box!

The whole kingdom was amazed.`,
        illustration: '👶'
      },
      {
        id: 'ch2',
        title: 'The Earth\'s Gift',
        content: `The baby had been given by Mother Earth herself as a blessing. King Janaka named her Sita, which means "furrow" - the line made when plowing the earth.

Because Sita came from the earth, she was pure and connected to nature. She grew up to be kind, wise, and gentle.

Everyone in the kingdom loved her.`,
        illustration: '🌍',
        decisionPoint: {
          id: 'dp1',
          question: 'What makes Sita\'s birth special?',
          options: [
            {
              id: 'opt1',
              text: 'She was found in a box',
              consequence: 'While that\'s part of the story, what\'s truly special is that she was a gift from Mother Earth.',
              lesson: 'Sita represents our connection to nature and the Earth.'
            },
            {
              id: 'opt2',
              text: 'She was a gift from Mother Earth herself',
              consequence: 'Sita being born from the earth shows her purity and her special connection to nature. She reminds us that we are all children of the Earth!',
              lesson: 'We are all connected to Mother Earth, who provides for and nurtures us.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Blessed Princess',
        content: `Sita grew up to be everything wonderful:
- Kind to all living beings
- Wise beyond her years
- Gentle and patient
- Brave when needed

She later married Rama and became one of the most beloved figures in mythology.

Sita's story teaches us:
- The earth gives us precious gifts
- Purity and kindness are beautiful
- Nature and humans are connected`,
        illustration: '👑',
        quiz: [
          {
            id: 'q1',
            question: 'Where did baby Sita come from?',
            options: [
              'The sky',
              'The ocean',
              'The earth, found while King Janaka was plowing',
              'A temple'
            ],
            correctAnswer: 2,
            explanation: 'Sita was found in the earth while King Janaka was plowing his field - she was a gift from Mother Earth.'
          }
        ]
      }
    ]
  },
  {
    id: 'parvati-teej',
    title: 'Parvati\'s Devotion for Love',
    description: 'The story of why we celebrate Teej and Parvati\'s love for Shiva!',
    ageRange: '8-10',
    character: 'Parvati',
    values: ['devotion', 'patience', 'love'],
    illustration: characterImages['Parvati'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Wish',
        content: `In a previous life, Parvati was Sati, who was married to Shiva. When she died, Shiva was heartbroken and went into deep meditation.

Parvati was reborn as the daughter of the Himalayas. From childhood, she was devoted to Shiva and wished to marry him.

But Shiva was in meditation and didn't notice her.`,
        illustration: '💕'
      },
      {
        id: 'ch2',
        title: 'The Long Wait',
        content: `Parvati decided to perform tapas (spiritual practice) to win Shiva's love. She meditated in the same place as Shiva, through cold winters and hot summers.

She gave up comforts and luxuries. For years she waited and prayed.

The gods were impressed by her devotion.`,
        illustration: '🧘',
        decisionPoint: {
          id: 'dp1',
          question: 'What made Parvati\'s devotion so special?',
          options: [
            {
              id: 'opt1',
              text: 'She was forced to do it',
              consequence: 'Parvati chose this path out of pure love. No one forced her.',
              lesson: 'True devotion comes from the heart, not from obligation.'
            },
            {
              id: 'opt2',
              text: 'She chose this path out of pure love and never gave up',
              consequence: 'Parvati\'s devotion was genuine and unwavering. True love gives us the patience to wait and the strength to persist!',
              lesson: 'True love and devotion give us patience and strength.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Happy Ending',
        content: `Finally, Shiva noticed Parvati's true devotion. He was touched by her love and patience.

Shiva and Parvati were married, and their union is celebrated as the festival of Teej.

This story teaches us:
- True love is patient
- Devotion and persistence are powerful
- Good things come to those who wait
- Real love is about commitment, not just feelings`,
        illustration: '💑',
        quiz: [
          {
            id: 'q1',
            question: 'How did Parvati win Shiva\'s love?',
            options: [
              'With gifts',
              'With patient devotion and unwavering love',
              'By tricking him',
              'Someone helped her'
            ],
            correctAnswer: 1,
            explanation: 'Parvati\'s patient devotion and unwavering love over many years finally touched Shiva\'s heart.'
          }
        ]
      }
    ]
  },
  {
    id: 'indra-pride',
    title: 'Indra Learns Humility',
    description: 'See how the king of gods learned an important lesson about pride!',
    ageRange: '11-12',
    character: 'Indra',
    values: ['humility', 'respect', 'wisdom'],
    illustration: characterImages['Indra'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Proud King',
        content: `Indra was the king of the gods, ruler of heaven, and controller of storms. He had great power and many victories.

But with power came pride. Indra began to think he was the greatest being in the universe. He treated others dismissively and thought no one could match him.

One day, a humble boy visited him.`,
        illustration: '👑'
      },
      {
        id: 'ch2',
        title: 'The Strange Visitor',
        content: `The boy asked Indra about the line of ants marching across the floor. "Each of these ants was once an Indra," the boy said mysteriously.

"What do you mean?" asked Indra, confused.

"The universe is vast," the boy explained. "There have been countless Indras before you, and there will be countless after. Each thought they were the greatest."`,
        illustration: '🐜',
        decisionPoint: {
          id: 'dp1',
          question: 'What was the boy teaching Indra?',
          options: [
            {
              id: 'opt1',
              text: 'That Indra was weak',
              consequence: 'The lesson wasn\'t about strength, but about perspective and humility.',
              lesson: 'True wisdom includes understanding our place in the larger universe.'
            },
            {
              id: 'opt2',
              text: 'That no matter how great we are, we should stay humble',
              consequence: 'The boy (who was actually Lord Vishnu) taught Indra that the universe is vast and eternal. Pride is foolish when we understand how much more there is than ourselves!',
              lesson: 'True greatness includes humility and recognizing that we are part of something much larger.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Lesson Learned',
        content: `Indra realized the boy was Vishnu in disguise, teaching him a lesson.

Indra understood that:
- Power doesn't make us better than others
- The universe is much bigger than any individual
- Even kings should be humble
- Pride comes before a fall

From then on, Indra tried to be a more humble king.

This story reminds us that no matter how successful we become, humility is always important.`,
        illustration: '🙏',
        quiz: [
          {
            id: 'q1',
            question: 'What did the ants represent in the story?',
            options: [
              'Just insects',
              'Previous Indras who had lived and passed away',
              'Demons',
              'Gods'
            ],
            correctAnswer: 1,
            explanation: 'The ants represented the countless Indras who came before, teaching the current Indra that even great kings are temporary.'
          }
        ]
      }
    ]
  },
  {
    id: 'krishna-arjuna-chariot',
    title: 'Krishna Guides Arjuna',
    description: 'The famous story of Krishna teaching Arjuna on the battlefield!',
    ageRange: '11-12',
    character: 'Krishna',
    values: ['duty', 'wisdom', 'dharma'],
    illustration: characterImages['Krishna'],
    estimatedMinutes: 12,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Battlefield',
        content: `The great war of Mahabharata was about to begin. Arjuna, the greatest archer, asked Krishna to drive his chariot to the middle of the battlefield.

Looking at both armies, Arjuna saw his teachers, uncles, cousins, and friends on the opposite side. He would have to fight and possibly kill people he loved.

Overwhelmed, Arjuna dropped his bow. "I cannot fight," he said.`,
        illustration: '⚔️'
      },
      {
        id: 'ch2',
        title: 'The Divine Teaching',
        content: `Krishna didn't scold Arjuna. Instead, he began to teach him wisdom that would become the Bhagavad Gita.

"You worry about killing, but the soul cannot be killed," Krishna explained. "You have a duty as a warrior to fight for what is right. It is worse to abandon your duty than to fight."

Krishna taught about:
- The eternal soul
- Doing one's duty
- Not being attached to results`,
        illustration: '💫',
        decisionPoint: {
          id: 'dp1',
          question: 'What is Krishna\'s main teaching?',
          options: [
            {
              id: 'opt1',
              text: 'Fighting is always good',
              consequence: 'Krishna\'s teaching is more subtle - it\'s about doing your duty, whatever that may be, without attachment to results.',
              lesson: 'Do your duty with dedication, regardless of the outcome.'
            },
            {
              id: 'opt2',
              text: 'Do your duty without attachment to results',
              consequence: 'Krishna taught that we should focus on doing what is right (our dharma) and not worry too much about success or failure. This is the secret to peace and right action!',
              lesson: 'Focus on doing what is right, not on what you might gain or lose.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Warrior\'s Choice',
        content: `After hearing Krishna's teaching, Arjuna understood his duty. The war wasn't about personal anger - it was about restoring justice and dharma.

"I will fight," Arjuna said, picking up his bow. He had found clarity and peace.

Krishna's teachings remind us:
- We all have duties we must fulfill
- We should act without being attached to results
- Sometimes difficult actions are necessary for justice
- Wisdom helps us see beyond our immediate feelings`,
        illustration: '🏹',
        quiz: [
          {
            id: 'q1',
            question: 'What did Krishna teach Arjuna about duty?',
            options: [
              'Avoid difficult duties',
              'Do your duty without attachment to results',
              'Only fight for money',
              'Never fight'
            ],
            correctAnswer: 1,
            explanation: 'Krishna taught that we should fulfill our dharma (duty) with dedication, without being overly attached to success or failure.'
          }
        ]
      }
    ]
  },
  {
    id: 'hanuman-ring',
    title: 'Hanuman Finds Sita',
    description: 'Join Hanuman on his mission to find Sita in Lanka!',
    ageRange: '8-10',
    character: 'Hanuman',
    values: ['courage', 'cleverness', 'devotion'],
    illustration: characterImages['Hanuman'],
    estimatedMinutes: 10,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Mission',
        content: `After his great leap across the ocean, Hanuman reached the island of Lanka. But his mission wasn't over - he had to find Sita in the demon king's kingdom.

Hanuman shrunk himself to the size of a cat. He sneaked through the streets of Lanka, searching every building.

Finally, he found the Ashoka grove where Sita was being held prisoner.`,
        illustration: '🏰'
      },
      {
        id: 'ch2',
        title: 'The Meeting',
        content: `Sita sat alone, sad but strong. She refused all of Ravana's demands and stayed true to Rama.

Hanuman revealed himself and gave her Rama's ring as proof he was a friend.

"Rama is coming to rescue you," Hanuman said. "Be strong!"

Sita's eyes filled with happy tears. "Thank you, brave one!"`,
        illustration: '💍',
        decisionPoint: {
          id: 'dp1',
          question: 'Why was bringing the ring so important?',
          options: [
            {
              id: 'opt1',
              text: 'It was just a pretty ring',
              consequence: 'The ring was proof that Hanuman truly came from Rama. Without it, Sita might not have believed him.',
              lesson: 'Trust requires proof, especially in dangerous situations.'
            },
            {
              id: 'opt2',
              text: 'It proved Hanuman truly came from Rama',
              consequence: 'In a dangerous place full of demons, Sita needed proof she could trust Hanuman. The ring showed Rama\'s love and that help was coming!',
              lesson: 'Building trust with proof is important, especially in difficult situations.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Message',
        content: `Sita gave Hanuman her hair ornament to take back to Rama as proof that she was alive and waiting.

Before leaving, Hanuman let himself be captured so he could deliver a warning to Ravana. Even when they set his tail on fire, he used it to burn down Lanka!

Hanuman's mission taught us:
- Courage and cleverness work together
- True devotion overcomes all obstacles
- A good messenger does more than just deliver a message`,
        illustration: '🔥',
        quiz: [
          {
            id: 'q1',
            question: 'What did Sita give Hanuman to take back to Rama?',
            options: [
              'A letter',
              'Her hair ornament',
              'A flower',
              'Gold'
            ],
            correctAnswer: 1,
            explanation: 'Sita gave Hanuman her hair ornament as proof that she was alive and that Hanuman had truly found her.'
          }
        ]
      }
    ]
  },
  {
    id: 'vishnu-varaha',
    title: 'Vishnu as the Mighty Boar',
    description: 'See how Vishnu saved the Earth from drowning in the cosmic ocean!',
    ageRange: '8-10',
    character: 'Vishnu',
    values: ['protection', 'determination', 'strength'],
    illustration: characterImages['Vishnu'],
    estimatedMinutes: 9,
    unlocked: true,
    chapters: [
      {
        id: 'ch1',
        title: 'The Sunken Earth',
        content: `A terrible demon named Hiranyaksha had stolen the Earth (Bhudevi) and hidden her deep in the cosmic ocean!

Without the Earth, all living beings were in danger. The gods were desperate.

They prayed to Lord Vishnu for help.`,
        illustration: '🌍'
      },
      {
        id: 'ch2',
        title: 'The Boar Avatar',
        content: `Vishnu transformed into Varaha - a mighty boar with a gigantic body. He dove deep into the cosmic ocean, swimming through the endless waters.

Hiranyaksha tried to stop him, and they fought a battle that shook the universe.

But Varaha was determined. He defeated the demon and found the Earth.`,
        illustration: '🐗',
        decisionPoint: {
          id: 'dp1',
          question: 'Why did Vishnu become a boar?',
          options: [
            {
              id: 'opt1',
              text: 'Boars are cute',
              consequence: 'Vishnu became a boar because boars are excellent at digging and moving through the earth - perfect for rescuing the buried Earth!',
              lesson: 'The right form for the right task.'
            },
            {
              id: 'opt2',
              text: 'A boar was the perfect form to dive deep and lift the Earth',
              consequence: 'Vishnu chose the boar form because it could dive deep into the ocean and use its tusks to lift the heavy Earth. He always takes the perfect form for each rescue!',
              lesson: 'We should adapt our approach based on what the situation requires.'
            }
          ]
        }
      },
      {
        id: 'ch3',
        title: 'The Rescue',
        content: `Varaha gently lifted the Earth on his tusks and rose from the depths of the ocean. He placed her safely back in her proper position.

All living beings were saved!

This story teaches us:
- Those who protect others take whatever form is needed
- Determination can reach even the deepest places
- Good will always rescue the world from evil
- We should care for Mother Earth as Vishnu did`,
        illustration: '🌅',
        quiz: [
          {
            id: 'q1',
            question: 'How did Varaha rescue the Earth?',
            options: [
              'He pulled her up with a rope',
              'He lifted her on his tusks from the cosmic ocean',
              'He asked the demon nicely',
              'He dried up the ocean'
            ],
            correctAnswer: 1,
            explanation: 'Varaha dove into the cosmic ocean, defeated the demon, and lifted the Earth gently on his mighty tusks.'
          }
        ]
      }
    ]
  }
];

export const getStoryById = (id: string): Story | undefined => {
  return stories.find(story => story.id === id);
};

export const getStoriesByAge = (ageRange: string): Story[] => {
  return stories.filter(story => story.ageRange === ageRange);
};

export const getStoriesByCharacter = (character: string): Story[] => {
  return stories.filter(story => story.character === character);
};

export const getStoriesByValue = (value: string): Story[] => {
  return stories.filter(story => story.values.includes(value as any));
};

export const getRelatedStories = (storyId: string, limit: number = 4): Story[] => {
  const currentStory = getStoryById(storyId);
  if (!currentStory) return [];

  const scored = stories
    .filter(s => s.id !== storyId)
    .map(story => {
      let score = 0;

      // Same character = high relevance
      if (story.character === currentStory.character) {
        score += 10;
      }

      // Shared values = medium relevance
      const sharedValues = story.values.filter(v => currentStory.values.includes(v));
      score += sharedValues.length * 3;

      // Same age range = some relevance
      if (story.ageRange === currentStory.ageRange) {
        score += 2;
      }

      return { story, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(item => item.story);
};
