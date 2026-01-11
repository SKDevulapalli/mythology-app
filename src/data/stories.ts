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
