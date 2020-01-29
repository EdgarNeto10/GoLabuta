-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 29-Jan-2020 ¨¤s 17:06
-- Vers?o do servidor: 8.0.13-4
-- vers?o do PHP: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES gb2312 */;

--
-- Database: `EGQ9u0m0HB`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Atleta`
--

CREATE TABLE `Atleta` (
  `atleta_id` int(12) NOT NULL,
  `atleta_nome` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta_dnsc` date DEFAULT NULL,
  `atleta_email` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta_telefone` int(9) DEFAULT NULL,
  `atleta_sexo` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta_password` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta_morada` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta_imagem` varchar(24) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta_lat` double DEFAULT NULL,
  `atleta_long` double DEFAULT NULL,
  `atleta_geom` geometry DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Atleta`
--

INSERT INTO `Atleta` (`atleta_id`, `atleta_nome`, `atleta_dnsc`, `atleta_email`, `atleta_telefone`, `atleta_sexo`, `atleta_password`, `atleta_morada`, `atleta_imagem`, `atleta_lat`, `atleta_long`, `atleta_geom`) VALUES
(1, 'Atleta 1', '1990-11-09', 'mesut@gmail.com', 99999999, 'M', 'mesutozil', 'Munic', 'atleta.png', 38.75160366, -9.1841409301, NULL),
(3, ' Atleta 2', '2019-12-10', 'adsfase', 99999999, 'm', 'dqw', 'wdqq', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Atle_Trein`
--

CREATE TABLE `Atle_Trein` (
  `atle_trein_id` int(12) NOT NULL,
  `atleta_atle_trein` int(12) NOT NULL,
  `treino_atle_trein` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Atle_Trein`
--

INSERT INTO `Atle_Trein` (`atle_trein_id`, `atleta_atle_trein`, `treino_atle_trein`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 5),
(4, 1, 6),
(9, 3, 9),
(10, 3, 10),
(11, 3, 11),
(12, 3, 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cal_desportivo`
--

CREATE TABLE `cal_desportivo` (
  `cal_desp_id` int(11) NOT NULL,
  `cal_desp_local` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `cal_desp_data` date DEFAULT NULL,
  `cal_desp_jogo` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `cal_desp_jornada` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cal_desportivo_lat` double DEFAULT NULL,
  `cal_desportivo_long` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `cal_desportivo`
--

INSERT INTO `cal_desportivo` (`cal_desp_id`, `cal_desp_local`, `cal_desp_data`, `cal_desp_jogo`, `cal_desp_jornada`, `cal_desportivo_lat`, `cal_desportivo_long`) VALUES
(12, 'Est¨¢dio Jos¨¦ Alvalade', '2020-01-23', 'Sporting VS Benfica', 'Jornada 1', 38.76125745, -9.160795109759835),
(13, 'Est¨¢dio do Drag?o', '2020-01-31', 'Porto VS Benfica', 'Jornada 2', 41.1617848, -8.584780600645765);

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentario`
--

CREATE TABLE `comentario` (
  `id` int(11) NOT NULL,
  `coment_date` date DEFAULT NULL,
  `coment` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `treino` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `comentario`
--

INSERT INTO `comentario` (`id`, `coment_date`, `coment`, `treino`) VALUES
(83, NULL, 'O treino correu bem.', 1),
(84, NULL, 'O treino foi produtivo.', 2),
(85, NULL, 'jbkjbk', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `coment_treino`
--

CREATE TABLE `coment_treino` (
  `id` int(11) NOT NULL,
  `treino_coment_treino` int(11) NOT NULL,
  `staff_coment_treino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `epoca`
--

CREATE TABLE `epoca` (
  `epoca_id` int(11) NOT NULL,
  `ep_encontro` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ep_resultado` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ep_Ngolos` int(3) NOT NULL,
  `ep_local` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ep_lat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ep_long` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `epoca`
--

INSERT INTO `epoca` (`epoca_id`, `ep_encontro`, `ep_resultado`, `ep_Ngolos`, `ep_local`, `ep_lat`, `ep_long`) VALUES
(1, ' Benfica - Rio Ave	', ' Benfica 1-0 Rio Ave	', 1, 'Est¨¢dio dos Arcos', '38.76125745', '-9.160795109759835'),
(2, 'Benfica - FC Porto', 'Benfica 2-4 FC Porto', 6, 'Est¨¢dio do Drag?o', '41.1617848', '-8.584780600645765'),
(3, 'Benfica - Pa?os de Ferreira	', 'Benfica 0-0 Pa?os de Ferreira', 0, 'Est¨¢dio da Mata Real', '41.270668650000005', '-8.384296000022818'),
(4, 'Benfica - Sporting', 'Benfica 1-3 Sporting', 4, 'Est¨¢dio Jos¨¦ Alvalade', '38.76125745', '-9.160795109759835'),
(5, 'Benfica - Belenenses ', 'Benfica 2-0 Belenenses ', 2, 'Est¨¢dio do Restelo', '38.70240095', '-9.20789132358843'),
(7, 'Benfica - Porto', 'Benfica 3-0 Porto', 3, 'Est¨¢dio do Drag?o', '41.1617848', '-8.584780600645765'),
(8, 'Benfica - Sporting', 'Benfica 4 - 4 Sporting', 8, 'Est¨¢dio Jos¨¦ Alvalade', '38.76125745', '-9.160795109759835'),
(10, 'Benfica - Vit¨®ria Clube de Lisboa', 'Benfica 4-0Vit¨®ria Clube de Lisboa', 4, 'Vit¨®ria Clube de Lisboa', '38.73477705', '-9.120023928679682');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Equipa`
--

CREATE TABLE `Equipa` (
  `equipa_nome` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `equipa_lat` double NOT NULL,
  `equipa_long` double NOT NULL,
  `equipa_local` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Equipa`
--

INSERT INTO `Equipa` (`equipa_nome`, `equipa_lat`, `equipa_long`, `equipa_local`) VALUES
('Equipa 1', 38.75160366, -9.1841409301, 'Est¨¢dio Sport Lisboa e Benfica');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Feedback`
--

CREATE TABLE `Feedback` (
  `feedback_id` int(11) NOT NULL,
  `staff_feedback` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `atleta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Feedback`
--

INSERT INTO `Feedback` (`feedback_id`, `staff_feedback`, `atleta`) VALUES
(22, 'Ok, muito bem.', 1),
(23, 'ok, correr mais.', 1),
(24, 'bjknkj', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `gestor`
--

CREATE TABLE `gestor` (
  `gest_id` int(11) NOT NULL,
  `gest_nome` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gest_dnsc` date NOT NULL,
  `gest_morada` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gest_email` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gest_numero` tinyint(9) NOT NULL,
  `gest_genero` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `gest_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `material`
--

CREATE TABLE `material` (
  `material_id` int(11) NOT NULL,
  `mat_nome` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `mat_tipo` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `mat_estado` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `material`
--

INSERT INTO `material` (`material_id`, `mat_nome`, `mat_tipo`, `mat_estado`) VALUES
(28, 'Air step', 'gym', 'disponivel'),
(29, 'Cones', 'campo', 'N?o dispon¨ªvel'),
(30, 'Elastico de resist¨ºncia', 'campo', 'disponivel'),
(31, 'Tonozeleiras ', 'campo', 'N?o dispon¨ªvel'),
(32, 'Barras push-up', 'gym', 'disponivel'),
(33, 'Prensa de pernas', 'gym ', 'disponivel'),
(34, 'Passadeira silver', 'gym', 'N?o dispon¨ªvel'),
(35, 'Banco multifun??es', 'gym', 'disponivel'),
(36, 'Maquina de abnominal', 'gym', 'N?o dispon¨ªvel');

-- --------------------------------------------------------

--
-- Estrutura da tabela `material_pedido`
--

CREATE TABLE `material_pedido` (
  `mat_ped_id` int(11) NOT NULL,
  `mat_ped_data` date DEFAULT NULL,
  `mat_ped_estado` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Plano_Treino`
--

CREATE TABLE `Plano_Treino` (
  `plan_treino_id` int(11) NOT NULL,
  `plan_treino_exer` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Plano_Treino_estd` varchar(40) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Extraindo dados da tabela `Plano_Treino`
--

INSERT INTO `Plano_Treino` (`plan_treino_id`, `plan_treino_exer`, `Plano_Treino_estd`) VALUES
(1, 'Eleva??es dos bra?os', 'Realizado'),
(2, 'Flex?o em losango', 'Por realizar'),
(3, 'Saltar a corda', 'Por realizar'),
(4, 'Flex?o inclinada', 'Por realizar'),
(9, 'Pulo lateral', 'Por realizar'),
(10, 'Agachamentos', 'Por realizar'),
(11, 'Passe em profundidade', 'Por realizar'),
(12, 'Remates com o peito do p¨¦', 'Por realizar');

-- --------------------------------------------------------

--
-- Estrutura da tabela `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `staff_nome` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `staff_dnsc` date DEFAULT NULL,
  `satff_morada` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `staff_email` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `staff_telefone` int(9) DEFAULT NULL,
  `staff_sexo` char(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `staff_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `staff`
--

INSERT INTO `staff` (`staff_id`, `staff_nome`, `staff_dnsc`, `satff_morada`, `staff_email`, `staff_telefone`, `staff_sexo`, `staff_password`) VALUES
(1, 'Staff 1', '2020-01-15', 'md2kl', 'wdlk', 0, 'M', 'Password'),
(2, 'Staff 2', '2020-01-29', 'dqdqw', 'qwdwq', 212, 'm', 'Password');

-- --------------------------------------------------------

--
-- Estrutura da tabela `staff_treino`
--

CREATE TABLE `staff_treino` (
  `staff_treino_id` int(11) NOT NULL,
  `staff_staff_treino` int(11) NOT NULL,
  `treino_staff_treino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `treino`
--

CREATE TABLE `treino` (
  `treino_id` int(12) NOT NULL,
  `treino_data` date DEFAULT NULL,
  `treino_tipo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `treino_local` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `treino_estado` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Extraindo dados da tabela `treino`
--

INSERT INTO `treino` (`treino_id`, `treino_data`, `treino_tipo`, `treino_local`, `treino_estado`) VALUES
(1, '2019-12-04', 'Muscula??o', 'CT Luz', 'Realizado'),
(2, '2019-12-04', 'Velocidade', 'CT luz', 'Por realizar'),
(5, '2019-12-11', 'Remates', 'CT Luz', 'Realizado'),
(6, '2019-12-11', 'Passes', 'CT luz', 'Por realizar'),
(9, '2019-12-23', 'Cruzamentos', 'CT Luz', 'Por realizar'),
(10, '2019-12-22', 'Drible', 'CT luz', 'Por realizar'),
(11, '2019-12-13', 'Lances livres', 'CT Luz', 'Por realizar'),
(12, '2019-12-22', 'Resist¨ºncia', 'CT luz', 'Por realizar');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Treino_Plan`
--

CREATE TABLE `Treino_Plan` (
  `treino_plan_id` int(11) NOT NULL,
  `treino_plan_treino` int(11) DEFAULT NULL,
  `plan_plano_treino` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Treino_Plan`
--

INSERT INTO `Treino_Plan` (`treino_plan_id`, `treino_plan_treino`, `plan_plano_treino`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(9, 2, 9),
(10, 2, 10),
(11, 2, 11),
(12, 2, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Atleta`
--
ALTER TABLE `Atleta`
  ADD PRIMARY KEY (`atleta_id`);

--
-- Indexes for table `Atle_Trein`
--
ALTER TABLE `Atle_Trein`
  ADD PRIMARY KEY (`atle_trein_id`),
  ADD KEY `Atleta_fk_Atle_Trein` (`atleta_atle_trein`),
  ADD KEY `Treino_fk_Atle_Trein` (`treino_atle_trein`);

--
-- Indexes for table `cal_desportivo`
--
ALTER TABLE `cal_desportivo`
  ADD PRIMARY KEY (`cal_desp_id`);

--
-- Indexes for table `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coment_fk_treino` (`treino`);

--
-- Indexes for table `coment_treino`
--
ALTER TABLE `coment_treino`
  ADD PRIMARY KEY (`id`),
  ADD KEY `treino_fk_coment_treino` (`treino_coment_treino`),
  ADD KEY `staff_fk_coment_treino` (`staff_coment_treino`);

--
-- Indexes for table `epoca`
--
ALTER TABLE `epoca`
  ADD PRIMARY KEY (`epoca_id`);

--
-- Indexes for table `Equipa`
--
ALTER TABLE `Equipa`
  ADD PRIMARY KEY (`equipa_nome`);

--
-- Indexes for table `Feedback`
--
ALTER TABLE `Feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `feed_fk_atleta` (`atleta`);

--
-- Indexes for table `gestor`
--
ALTER TABLE `gestor`
  ADD PRIMARY KEY (`gest_id`);

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`material_id`);

--
-- Indexes for table `material_pedido`
--
ALTER TABLE `material_pedido`
  ADD PRIMARY KEY (`mat_ped_id`);

--
-- Indexes for table `Plano_Treino`
--
ALTER TABLE `Plano_Treino`
  ADD PRIMARY KEY (`plan_treino_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `staff_treino`
--
ALTER TABLE `staff_treino`
  ADD PRIMARY KEY (`staff_treino_id`),
  ADD KEY `staff_fk_staff_treino` (`staff_staff_treino`),
  ADD KEY `treino_fk_staff_treino` (`treino_staff_treino`);

--
-- Indexes for table `treino`
--
ALTER TABLE `treino`
  ADD PRIMARY KEY (`treino_id`);

--
-- Indexes for table `Treino_Plan`
--
ALTER TABLE `Treino_Plan`
  ADD PRIMARY KEY (`treino_plan_id`),
  ADD KEY `Plan_treino_fk_plan` (`plan_plano_treino`),
  ADD KEY `Plan_treino_fk_treino` (`treino_plan_treino`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Atleta`
--
ALTER TABLE `Atleta`
  MODIFY `atleta_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Atle_Trein`
--
ALTER TABLE `Atle_Trein`
  MODIFY `atle_trein_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `cal_desportivo`
--
ALTER TABLE `cal_desportivo`
  MODIFY `cal_desp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `epoca`
--
ALTER TABLE `epoca`
  MODIFY `epoca_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Feedback`
--
ALTER TABLE `Feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `material`
--
ALTER TABLE `material`
  MODIFY `material_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `Plano_Treino`
--
ALTER TABLE `Plano_Treino`
  MODIFY `plan_treino_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `treino`
--
ALTER TABLE `treino`
  MODIFY `treino_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `Treino_Plan`
--
ALTER TABLE `Treino_Plan`
  MODIFY `treino_plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `Atle_Trein`
--
ALTER TABLE `Atle_Trein`
  ADD CONSTRAINT `Atleta_fk_Atle_Trein` FOREIGN KEY (`atleta_atle_trein`) REFERENCES `Atleta` (`atleta_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Treino_fk_Atle_Trein` FOREIGN KEY (`treino_atle_trein`) REFERENCES `treino` (`treino_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `coment_fk_treino` FOREIGN KEY (`treino`) REFERENCES `treino` (`treino_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `coment_treino`
--
ALTER TABLE `coment_treino`
  ADD CONSTRAINT `staff_fk_coment_treino` FOREIGN KEY (`staff_coment_treino`) REFERENCES `coment_treino` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `treino_fk_coment_treino` FOREIGN KEY (`treino_coment_treino`) REFERENCES `coment_treino` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `Feedback`
--
ALTER TABLE `Feedback`
  ADD CONSTRAINT `feed_fk_atleta` FOREIGN KEY (`atleta`) REFERENCES `Atleta` (`atleta_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `staff_treino`
--
ALTER TABLE `staff_treino`
  ADD CONSTRAINT `staff_fk_staff_treino` FOREIGN KEY (`staff_staff_treino`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `treino_fk_staff_treino` FOREIGN KEY (`treino_staff_treino`) REFERENCES `treino` (`treino_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `Treino_Plan`
--
ALTER TABLE `Treino_Plan`
  ADD CONSTRAINT `Plan_treino_fk_plan` FOREIGN KEY (`plan_plano_treino`) REFERENCES `Plano_Treino` (`plan_treino_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Plan_treino_fk_treino` FOREIGN KEY (`treino_plan_treino`) REFERENCES `treino` (`treino_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
