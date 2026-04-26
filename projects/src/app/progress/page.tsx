import { Card, CardContent } from '@/components/ui/card';

// 北大红配色
const PKU_RED = '#9B1B30';

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-slate-800">项目进展</h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          了解研究项目的最新动态和成果
        </p>
      </section>

      <div className="space-y-8">
        <Card className="border-l-4" style={{ borderLeftColor: PKU_RED }}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: PKU_RED }}>1</span>
              <h3 className="text-lg font-semibold text-slate-800">
                项目已完成研究队列招募及第一轮访谈和问卷调查
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                截至2026年3月，项目已完成研究队列招募及第一轮访谈和问卷调查。研究队列共241人，其中2024年度招募66人，2025年度招募175人。临床与咨询心理学方向同学共166人，非临床与咨询心理学方向同学共75人。队列同学来自五湖四海，涵盖了华北、华中、华东、华南、西南和西北地区共31个高校。
              </p>
              <p>
                目前，项目团队已完成对所有队列同学的第一轮访谈和问卷调查，并已完成对2024年度招募同学的追踪访谈和第二次问卷调查。之后，项目团队将在每年的4~6月和11~12月进行问卷调查（每年两次），并在每年寒假进行追踪访谈（每年一次）。
              </p>
              <p>
                此外，项目团队已建立研究队列微信群，并定期在群内发布相关信息，鼓励队列成员相互交流和支持。之后团队会筹划开展针对队列成员的线上支持性团体，同时正在搭建针对MAP同学的新手咨询师黄页平台，以期帮助和支持MAP同学的职业发展和个人成长。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4" style={{ borderLeftColor: PKU_RED }}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: PKU_RED }}>2</span>
              <h3 className="text-lg font-semibold text-slate-800">
                研究方案已通过北京大学心理与认知科学学院伦理委员会审批
              </h3>
            </div>
            <p className="mb-4 text-sm text-slate-500">伦理审批编号：#2024-06-03</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-slate-700">研究目的：</h4>
                <p className="text-slate-600 leading-relaxed">
                  本研究旨在系统追踪和分析中国应用心理专业硕士（Master of Applied Psychology, MAP）的职业发展轨迹，了解他们在备考时的经历、就读时的体验以及毕业后的职业选择、职业成长及工作满意度等方面的具体情况。通过全面的数据收集和分析，本研究将揭示影响中国应用心理专业硕士职业发展的关键因素，并提出相应的改进建议，以促进该领域的教育和职业发展。
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-slate-700">研究意义：</h4>
                <p className="text-slate-600 leading-relaxed">
                  本研究将填补国内关于应用心理专业硕士（Master of Applied Psychology, MAP）职业发展的系统性研究空白，为相关学术研究和教育实践提供数据和参考。从政策角度，研究结果将为高等教育机构和相关政府部门制定和优化MAP的培养方案和职业发展政策提供科学依据，从而提升MAP学生的就读体验，并提高毕业生的就业质量和职业幸福感。同时，通过深入了解毕业生在职业发展中的实际需求和挑战，本研究可以为在校学生及毕业生提供更具针对性的指导和支持服务，帮助他们更好地规划职业路径。
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-slate-700">研究计划：</h4>
                <p className="text-slate-600 leading-relaxed">
                  本项目计划招募应用心理专业硕士（Master of Applied Psychology, MAP）学历教育培养项目中的学生进行调查和追踪。追踪同一批MAP学生从入学到毕业后的职业发展情况。采用问卷调查、深度访谈和二次数据收集等方法进行研究。每隔半年进行一次系统性的评估和数据收集。具体涉及变量如下：
                </p>
                <ul className="ml-6 mt-3 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: PKU_RED }}></span>
                    <span><strong>培养项目本身：</strong>准入/毕业难度、授课形式（线上/线下，时间是否集中等）、课程数量和难度、考核方式、项目投入（时间、开销、准入成本）、项目收益（证书和各种资历认证）以及实践/科研相关要求</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: PKU_RED }}></span>
                    <span><strong>教师（授课、班主任、导师和督导等）：</strong>授课风格、流派、专业背景和师生关系</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: PKU_RED }}></span>
                    <span><strong>个人：</strong>在校具体活动及时间、职业规划、人格特质、性别、发展连续性（进入MAP前的工作）、个人收入、年龄、心理变量（自我同一性、心理韧性、认知灵活性、对模糊的耐受性、乐观、利他、情绪稳定性、动机、幸福感、满意度和压力等）；对专业、行业、项目、来访的态度；感知到的项目性价比；个人胜任力；自身社会地位</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: PKU_RED }}></span>
                    <span><strong>社会（支持）：</strong>同学关系、就业资源、社会政策、实习中心基础设施建设、家庭收入、行业发展及地位等</span>
                  </li>
                </ul>
                <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                  完整参与研究的志愿者会获得相应报酬，同时报酬也可以捐赠于我们目前正在筹划为MAP毕业生建设的新手咨询师黄页平台，期待得到你的建议和反馈。
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-slate-700">研究信息保密和储存：</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h5 className="mb-2 font-medium text-slate-700">信息保密</h5>
                    <p className="text-sm text-slate-600">
                      问卷调查通过安全的在线平台进行，确保数据传输的安全性。对于纸质问卷，填写完毕后将立即封存，并在24小时内转移到安全存储地点。访谈过程中在征求参与者意见的基础上录音、录像，访谈记录将以编码方式保存，访谈内容只限研究团队内部使用。为了规避可能的师生关系所造成的社会赞许性，访谈员队伍均由学生组成，且访谈具体内容和参与者个人信息对项目负责老师不可见。
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h5 className="mb-2 font-medium text-slate-700">科研档案管理</h5>
                    <p className="text-sm text-slate-600">
                      所有电子数据将存储在加密的研究数据库中，数据库采用高级别加密技术，并设置严格的访问权限，仅限研究团队核心成员访问。所有纸质问卷和记录将在收集后立即扫描并数字化，原件将存放在加锁的文件柜中，文件柜位于安全的办公场所，只有授权人员可以访问。定期进行数据备份，备份文件同样进行加密，并存储在不同的安全位置，以防数据丢失或损坏。
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h5 className="mb-2 font-medium text-slate-700">知情同意</h5>
                    <p className="text-sm text-slate-600">
                      在数据收集之前，向每位参与者提供详细的知情同意书，解释研究目的、数据使用方式、保密措施等，确保参与者知情同意。
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h5 className="mb-2 font-medium text-slate-700">数据分析过程中的保密措施</h5>
                    <p className="text-sm text-slate-600">
                      在数据分析过程中，使用编码而非真实身份信息进行数据分析，确保分析结果无法追溯到具体个人。分析过程中使用的计算机和软件都设置了严格的访问权限，只有研究团队成员才能使用和处理数据。
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h5 className="mb-2 font-medium text-slate-700">数据共享和发布</h5>
                    <p className="text-sm text-slate-600">
                      研究结果以汇总数据的形式发布，不包含任何个人身份信息。如需与外部合作伙伴或学术机构共享数据，确保共享的数据经过充分的去标识化处理，并签署数据共享协议，明确数据使用范围和保密责任。
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h5 className="mb-2 font-medium text-slate-700">数据销毁</h5>
                    <p className="text-sm text-slate-600">
                      根据伦理要求和研究计划，数据将在研究结束后的规定期限内（通常为5年）保存。保存期限到期后，所有电子数据将通过安全的电子数据销毁技术永久删除，所有纸质数据将通过碎纸机销毁，确保数据无法恢复。
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-4" style={{ backgroundColor: `${PKU_RED}10` }}>
                <h4 className="mb-2 font-semibold text-slate-700">研究者团队</h4>
                <p className="text-slate-600">
                  研究由北京大学临床与健康心理系一抹阳光实验室发起，负责人为符仲芳研究员，联系方式z.fu@pku.edu.cn。如有任何问题，欢迎邮件联系！感谢各位志愿参与的同学的贡献，我们将珍惜在此过程中所建立的研究关系，进一步促进MAP项目的健康发展。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
